// cutoff_data.js

const CUTOFF_DB = {
    "NTSP": {
        "GEN": {
            "GEN": { cut: "249.23" },
            "FEM": { cut: "235.21" },
            "WID": { cut: "121.39" },
            "DIV": { cut: "201.40" },
            "EX":  { cut: "184.91" }
        },
        "OBC": {
            "GEN": { cut: "244.66" },
            "FEM": { cut: "229.22" },
            "WID": { cut: "104.95" },
            "DIV": { cut: "188.75" },
            "EX":  { cut: "166.79" }
        },
        "EWS": {
            "GEN": { cut: "241.55" },
            "FEM": { cut: "225.88" },
            "WID": { cut: "104.91" },
            "DIV": { cut: "-" },
            "EX":  { cut: "138.62" }
        },
        "MBC": {
            "GEN": { cut: "236.69" },
            "FEM": { cut: "206.07" },
            "WID": { cut: "96.49" },
            "DIV": { cut: "-" },
            "EX":  { cut: "141.47" }
        },
        "SC": {
            "GEN": { cut: "226.79" },
            "FEM": { cut: "204.96" },
            "WID": { cut: "72.14" },
            "DIV": { cut: "165.26" },
            "EX":  { cut: "12.01" }
        },
        "ST": {
            "GEN": { cut: "223.59" },
            "FEM": { cut: "203.36" },
            "WID": { cut: "63.49" },
            "DIV": { cut: "159.60" },
            "EX":  { cut: "-" }
        },
        "SAH": {
            "GEN": { cut: "90.54" },
            "FEM": { cut: "80.80" },
            "WID": { cut: "NA" },
            "DIV": { cut: "NA" },
            "EX":  { cut: "NA" }
        }
    },
    "TSP": {
        "GEN": {
            "GEN": { cut: "190.50" },
            "FEM": { cut: "175.20" },
            "WID": { cut: "80.50" },
            "DIV": { cut: "140.00" },
            "EX":  { cut: "110.00" }
        },
        "SC": {
            "GEN": { cut: "160.00" },
            "FEM": { cut: "145.00" },
            "WID": { cut: "50.00" },
            "DIV": { cut: "-" },
            "EX":  { cut: "-" }
        },
        "ST": {
            "GEN": { cut: "140.00" },
            "FEM": { cut: "130.00" },
            "WID": { cut: "40.00" },
            "DIV": { cut: "-" },
            "EX":  { cut: "-" }
        }
    }
};

const HORIZONTAL_CUTOFF = {
    "NTSP": [
        { label: "LD/CP",  cut: "162.40" },
        { label: "SPORTS", cut: "200.06" },
        { label: "VI/LV",  cut: "NA" }, 
        { label: "HI",     cut: "NA" }, 
        { label: "ID/MI",  cut: "NA" } 
    ],
    "TSP": [
        { label: "LD/CP",  cut: "130.50" },
        { label: "SPORTS", cut: "150.00" },
        { label: "VI/LV",  cut: "NA" },
        { label: "HI",     cut: "NA" },
        { label: "ID/MI",  cut: "NA" }
    ]
};

const SHIFT_ATTENDANCE = {
    "1": { date: "19-09-2025 (Morn)", total: "4,11,843", pres: "3,47,694", abs: "64,149", per: "84.42%" },
    "2": { date: "19-09-2025 (Eve)",  total: "4,11,843", pres: "3,51,269", abs: "60,574", per: "85.29%" },
    "3": { date: "20-09-2025 (Morn)", total: "4,11,843", pres: "3,52,602", abs: "59,241", per: "85.62%" },
    "4": { date: "20-09-2025 (Eve)",  total: "4,11,843", pres: "3,54,970", abs: "56,873", per: "86.19%" },
    "5": { date: "21-09-2025 (Morn)", total: "4,11,843", pres: "3,55,336", abs: "56,507", per: "86.28%" },
    "6": { date: "21-09-2025 (Eve)",  total: "4,11,851", pres: "3,55,327", abs: "56,524", per: "86.28%" }
};