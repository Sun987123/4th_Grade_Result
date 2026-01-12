// cutoff_data.js

const CUTOFF_DB = {
    "NTSP": {
        "GEN": { "GEN": "249.23", "FEM": "235.21", "WID": "121.39", "DIV": "201.40", "EX": "184.91" },
        "OBC": { "GEN": "244.66", "FEM": "229.22", "WID": "104.95", "DIV": "188.75", "EX": "166.79" },
        "EWS": { "GEN": "241.55", "FEM": "225.88", "WID": "104.91", "DIV": "-", "EX": "138.62" },
        "MBC": { "GEN": "236.69", "FEM": "206.07", "WID": "96.49", "DIV": "-", "EX": "141.47" },
        "SC":  { "GEN": "226.79", "FEM": "204.96", "WID": "72.14", "DIV": "165.26", "EX": "12.01" },
        "ST":  { "GEN": "223.59", "FEM": "203.36", "WID": "63.49", "DIV": "159.60", "EX": "-" },
        "SAH": { "GEN": "90.54", "FEM": "80.80", "WID": "NA", "DIV": "NA", "EX": "NA" }
    },
    "TSP": {
        // Sample Data (Dummy Values as requested)
        "GEN": { "GEN": "190.50", "FEM": "175.20", "WID": "80.50", "DIV": "140.00", "EX": "110.00" },
        "SC":  { "GEN": "160.00", "FEM": "145.00", "WID": "50.00", "DIV": "-", "EX": "-" },
        "ST":  { "GEN": "140.00", "FEM": "130.00", "WID": "40.00", "DIV": "-", "EX": "-" }
    }
};

const HORIZONTAL_CUTOFF = {
    "NTSP": [
        { label: "LD/CP", val: "162.40" },
        { label: "SPORTS", val: "200.06" }
    ],
    "TSP": [
        { label: "LD/CP", val: "130.50" }, // Sample
        { label: "SPORTS", val: "150.00" } // Sample
    ]
};

// SHIFT ATTENDANCE DATA (From Image)
const SHIFT_ATTENDANCE = {
    "1": { date: "19-09-2025 (Morn)", total: "4,11,843", pres: "3,47,694", abs: "64,149", per: "84.42%" },
    "2": { date: "19-09-2025 (Eve)",  total: "4,11,843", pres: "3,51,269", abs: "60,574", per: "85.29%" },
    "3": { date: "20-09-2025 (Morn)", total: "4,11,843", pres: "3,52,602", abs: "59,241", per: "85.62%" },
    "4": { date: "20-09-2025 (Eve)",  total: "4,11,843", pres: "3,54,970", abs: "56,873", per: "86.19%" },
    "5": { date: "21-09-2025 (Morn)", total: "4,11,843", pres: "3,55,336", abs: "56,507", per: "86.28%" },
    "6": { date: "21-09-2025 (Eve)",  total: "4,11,851", pres: "3,55,327", abs: "56,524", per: "86.28%" }
};