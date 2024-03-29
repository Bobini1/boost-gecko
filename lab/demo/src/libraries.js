const libraries = [
    {
        "key": "accumulators",
        "name": "Accumulators"
    },
    {
        "key": "algorithm",
        "name": "Algorithm"
    },
    {
        "key": "align",
        "name": "Align"
    },
    {
        "key": "any",
        "name": "Any"
    },
    {
        "key": "array",
        "name": "Array"
    },
    {
        "key": "asio",
        "name": "Asio"
    },
    {
        "key": "assert",
        "name": "Assert"
    },
    {
        "key": "assign",
        "name": "Assign"
    },
    {
        "key": "atomic",
        "name": "Atomic"
    },
    {
        "key": "beast",
        "name": "Beast"
    },
    {
        "key": "bimap",
        "name": "Bimap"
    },
    {
        "key": "bind",
        "name": "Bind"
    },
    {
        "key": "crc",
        "name": "CRC"
    },
    {
        "key": "callable_traits",
        "name": "CallableTraits"
    },
    {
        "key": "chrono",
        "name": "Chrono"
    },
    {
        "key": "circular_buffer",
        "name": "Circular Buffer"
    },
    {
        "key": "compute",
        "name": "Compute"
    },
    {
        "key": "concept_check",
        "name": "Concept Check"
    },
    {
        "key": "config",
        "name": "Config"
    },
    {
        "key": "container",
        "name": "Container"
    },
    {
        "key": "container_hash",
        "name": "Container Hash"
    },
    {
        "key": "context",
        "name": "Context"
    },
    {
        "key": "contract",
        "name": "Contract"
    },
    {
        "key": "conversion",
        "name": "Conversion"
    },
    {
        "key": "convert",
        "name": "Convert"
    },
    {
        "key": "core",
        "name": "Core"
    },
    {
        "key": "coroutine",
        "name": "Coroutine"
    },
    {
        "key": "coroutine2",
        "name": "Coroutine2"
    },
    {
        "key": "dll",
        "name": "DLL"
    },
    {
        "key": "date_time",
        "name": "Date Time"
    },
    {
        "key": "describe",
        "name": "Describe"
    },
    {
        "key": "detail",
        "name": "Detail"
    },
    {
        "key": "dynamic_bitset",
        "name": "Dynamic Bitset"
    },
    {
        "key": "endian",
        "name": "Endian"
    },
    {
        "key": "fiber",
        "name": "Fiber"
    },
    {
        "key": "flyweight",
        "name": "Flyweight"
    },
    {
        "key": "foreach",
        "name": "Foreach"
    },
    {
        "key": "function",
        "name": "Function"
    },
    {
        "key": "function_types",
        "name": "Function Types"
    },
    {
        "key": "functional/factory",
        "name": "Functional/Factory"
    },
    {
        "key": "functional/forward",
        "name": "Functional/Forward"
    },
    {
        "key": "functional/overloaded_function",
        "name": "Functional/Overloaded Function"
    },
    {
        "key": "fusion",
        "name": "Fusion"
    },
    {
        "key": "geometry",
        "name": "Geometry"
    },
    {
        "key": "graph",
        "name": "Graph"
    },
    {
        "key": "hof",
        "name": "HOF"
    },
    {
        "key": "heap",
        "name": "Heap"
    },
    {
        "key": "histogram",
        "name": "Histogram"
    },
    {
        "key": "icl",
        "name": "ICL"
    },
    {
        "key": "io",
        "name": "IO"
    },
    {
        "key": "integer",
        "name": "Integer"
    },
    {
        "key": "interprocess",
        "name": "Interprocess"
    },
    {
        "key": "numeric/interval",
        "name": "Interval"
    },
    {
        "key": "intrusive",
        "name": "Intrusive"
    },
    {
        "key": "json",
        "name": "JSON"
    },
    {
        "key": "leaf",
        "name": "LEAF"
    },
    {
        "key": "lambda",
        "name": "Lambda"
    },
    {
        "key": "lambda2",
        "name": "Lambda2"
    },
    {
        "key": "lexical_cast",
        "name": "Lexical Cast"
    },
    {
        "key": "local_function",
        "name": "Local Function"
    },
    {
        "key": "lockfree",
        "name": "Lockfree"
    },
    {
        "key": "log",
        "name": "Log"
    },
    {
        "key": "mpi",
        "name": "MPI"
    },
    {
        "key": "math",
        "name": "Math"
    },
    {
        "key": "msm",
        "name": "Meta State Machine"
    },
    {
        "key": "metaparse",
        "name": "Metaparse"
    },
    {
        "key": "move",
        "name": "Move"
    },
    {
        "key": "mp11",
        "name": "Mp11"
    },
    {
        "key": "multi_array",
        "name": "Multi-Array"
    },
    {
        "key": "multi_index",
        "name": "Multi-Index"
    },
    {
        "key": "multiprecision",
        "name": "Multiprecision"
    },
    {
        "key": "mysql",
        "name": "MySQL"
    },
    {
        "key": "numeric/conversion",
        "name": "Numeric Conversion"
    },
    {
        "key": "numeric/odeint",
        "name": "Odeint"
    },
    {
        "key": "optional",
        "name": "Optional"
    },
    {
        "key": "pfr",
        "name": "PFR"
    },
    {
        "key": "parameter",
        "name": "Parameter"
    },
    {
        "key": "parameter_python",
        "name": "Parameter Python Bindings"
    },
    {
        "key": "phoenix",
        "name": "Phoenix"
    },
    {
        "key": "poly_collection",
        "name": "PolyCollection"
    },
    {
        "key": "pool",
        "name": "Pool"
    },
    {
        "key": "predef",
        "name": "Predef"
    },
    {
        "key": "process",
        "name": "Process"
    },
    {
        "key": "program_options",
        "name": "Program Options"
    },
    {
        "key": "property_map",
        "name": "Property Map"
    },
    {
        "key": "property_tree",
        "name": "Property Tree"
    },
    {
        "key": "proto",
        "name": "Proto"
    },
    {
        "key": "python",
        "name": "Python"
    },
    {
        "key": "qvm",
        "name": "QVM"
    },
    {
        "key": "random",
        "name": "Random"
    },
    {
        "key": "range",
        "name": "Range"
    },
    {
        "key": "ratio",
        "name": "Ratio"
    },
    {
        "key": "rational",
        "name": "Rational"
    },
    {
        "key": "regex",
        "name": "Regex"
    },
    {
        "key": "safe_numerics",
        "name": "Safe Numerics"
    },
    {
        "key": "scope_exit",
        "name": "Scope Exit"
    },
    {
        "key": "signals2",
        "name": "Signals2"
    },
    {
        "key": "smart_ptr",
        "name": "Smart Ptr"
    },
    {
        "key": "sort",
        "name": "Sort"
    },
    {
        "key": "spirit",
        "name": "Spirit"
    },
    {
        "key": "stacktrace",
        "name": "Stacktrace"
    },
    {
        "key": "statechart",
        "name": "Statechart"
    },
    {
        "key": "static_assert",
        "name": "Static Assert"
    },
    {
        "key": "static_string",
        "name": "Static String"
    },
    {
        "key": "stl_interfaces",
        "name": "Stl_interfaces"
    },
    {
        "key": "system",
        "name": "System"
    },
    {
        "key": "tti",
        "name": "TTI"
    },
    {
        "key": "test",
        "name": "Test"
    },
    {
        "key": "thread",
        "name": "Thread"
    },
    {
        "key": "throw_exception",
        "name": "ThrowException"
    },
    {
        "key": "timer",
        "name": "Timer"
    },
    {
        "key": "tribool",
        "name": "Tribool"
    },
    {
        "key": "tuple",
        "name": "Tuple"
    },
    {
        "key": "type_erasure",
        "name": "Type Erasure"
    },
    {
        "key": "type_index",
        "name": "Type Index"
    },
    {
        "key": "type_traits",
        "name": "Type Traits"
    },
    {
        "key": "typeof",
        "name": "Typeof"
    },
    {
        "key": "url",
        "name": "URL"
    },
    {
        "key": "units",
        "name": "Units"
    },
    {
        "key": "unordered",
        "name": "Unordered"
    },
    {
        "key": "utility",
        "name": "Utility"
    },
    {
        "key": "uuid",
        "name": "Uuid"
    },
    {
        "key": "vmd",
        "name": "VMD"
    },
    {
        "key": "variant",
        "name": "Variant"
    },
    {
        "key": "variant2",
        "name": "Variant2"
    },
    {
        "key": "winapi",
        "name": "WinAPI"
    },
    {
        "key": "xpressive",
        "name": "Xpressive"
    },
    {
        "key": "yap",
        "name": "YAP"
    },
    {
        "key": "numeric/ublas",
        "name": "uBLAS"
    }
];

export default libraries