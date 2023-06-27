import itertools
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

import pytest

import json
import yaml


def get_records(library_key) -> Any | None:
    try:
        with open(f'./algolia_records/{library_key}.json') as f:
            return json.load(f)
    except FileNotFoundError:
        return None

@pytest.fixture(scope='session')
def config():
    with open('./config/config.yaml') as f:
        return yaml.load(f, Loader=yaml.FullLoader)


# test if all html files in the directory are covered by records
def check_html_files_in_directory(library_key, boost_root, boost_version, library_json):
    all_urls = set()
    found = 0
    for entry in library_json:
        all_urls.update(str(urlparse(lvl['path']).path) for lvl in entry['hierarchy'].values() if lvl is not None)

    library_path1 = Path(boost_root) / 'doc' / 'html' / library_key
    library_path2 = Path(boost_root) / 'libs' / library_key
    html_files = itertools.chain(Path(library_path1).rglob('*.html'),
                                 Path(library_path2).rglob('*.html'))
    html_files = {str(html_file).replace(str(boost_root), '')[1:] for html_file in html_files}
    for html_file in html_files:
        if html_file in all_urls:
            found += 1
    return found / len(html_files)

def test_html_files(config):
    libraries = map(lambda lib: lib['key'], itertools.chain(*(crawler['libraries'] for crawler in config['crawlers'])))
    percentages = []
    for library_key in libraries:
        library_json = get_records(library_key)

        if library_json is None:
            percentages.append(0)
        else:
            boost_root = config['boost']['root']
            boost_version = config['boost']['version']
            percentages.append(check_html_files_in_directory(library_key, boost_root, boost_version, library_json))

    total_percentage = sum(percentages) / len(percentages)
    assert total_percentage > 0.9, f'Only {total_percentage * 100}% of html files are covered by records'