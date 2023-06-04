from pathlib import Path
import re
import json

from .crawlers import *
from .config import config


def create_algolia_records(library_key: str, sections: dict, boost_root: str, boost_version: str):
    records = []
    for url, section in sections.items():
        url = url.replace(str(Path(boost_root).resolve()), 'https://www.boost.org/doc/libs/' + boost_version)

        records.append({
            'type': 'content',
            'library_key': library_key,
            'boost_version': boost_version,
            'url': url,
            'content': re.sub(r'\s+', ' ', section['content']).strip(),
            'weight': {
                'pageRank': 0,
                'level': 100 - len(section['lvls']) * 10,
                'position': 0
            },
            'hierarchy': {
                'lvl0': section['lvls'][0] if len(section['lvls']) > 0 else None,
                'lvl1': section['lvls'][1] if len(section['lvls']) > 1 else None,
                'lvl2': section['lvls'][2] if len(section['lvls']) > 2 else None,
                'lvl3': section['lvls'][3] if len(section['lvls']) > 3 else None,
                'lvl4': section['lvls'][4] if len(section['lvls']) > 4 else None,
                'lvl5': section['lvls'][5] if len(section['lvls']) > 5 else None,
                'lvl6': section['lvls'][6] if len(section['lvls']) > 6 else None
            }})

    with open('./algolia_records/' + library_key.replace('/', '_') + '.json', 'w', encoding='utf-8') as outfile:
        json.dump(records, outfile, indent=4)


if __name__ == "__main__":

    for crawler_cfg in config['crawlers']:
        crawler = globals()[crawler_cfg['name']](boost_root=config['boost_root'])

        for library_key in crawler_cfg['libraries']:
            sections = crawler.crawl(library_key)

            create_algolia_records(library_key=library_key,
                                   sections=sections,
                                   boost_root=config['boost_root'],
                                   boost_version=config['boost_version'])
