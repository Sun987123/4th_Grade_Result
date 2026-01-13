// cutoff_data.js

const CUTOFF_DB = {
    "NTSP": {
        "GEN": {
            "GEN": { cut: "249.23", vac: 12773 }, // Male
            "FEM": { cut: "235.21", vac: 3825 },
            "WID": { cut: "121.39", vac: 1144 },
            "DIV": { cut: "201.40", vac: 273 },
            "EX":  { cut: "184.91", vac: 2593 }   // From Horizontal Table
        },
        "OBC": {
            "GEN": { cut: "244.66", vac: 6490 },
            "FEM": { cut: "229.22", vac: 2070 },
            "WID": { cut: "104.95", vac: 571 },
            "DIV": { cut: "188.75", vac: 144 },
            "EX":  { cut: "166.79", vac: 1277 }
        },
        "EWS": {
            "GEN": { cut: "241.55", vac: 3558 },
            "FEM": { cut: "225.88", vac: 1096 },
            "WID": { cut: "104.91", vac: 321 },
            "DIV": { cut: "-", vac: 48 },
            "EX":  { cut: "138.62", vac: 650 }
        },
        "MBC": {
            "GEN": { cut: "236.69", vac: 1735 },
            "FEM": { cut: "206.07", vac: 532 },
            "WID": { cut: "96.49", vac: 133 },
            "DIV": { cut: "-", vac: 18 },
            "EX":  { cut: "141.47", vac: 321 }
        },
        "SC": {
            "GEN": { cut: "226.79", vac: 4914 },
            "FEM": { cut: "204.96", vac: 1529 },
            "WID": { cut: "72.14", vac: 417 },
            "DIV": { cut: "165.26", vac: 90 },
            "EX":  { cut: "12.01", vac: 926 }
        },
        "ST": {
            "GEN": { cut: "223.59", vac: 4002 },
            "FEM": { cut: "203.36", vac: 1219 },
            "WID": { cut: "63.49", vac: 351 },
            "DIV": { cut: "159.60", vac: 69 },
            "EX":  { cut: "-", vac: 736 }
        },
        "SAH": {
            "GEN": { cut: "90.54", vac: 185 },
            "FEM": { cut: "80.80", vac: 53 },
            "WID": { cut: "NA", vac: 10 },
            "DIV": { cut: "NA", vac: 1 },
            "EX":  { cut: "NA", vac: 0 }
        }
    },
    "TSP": {
        // SAMPLE DATA (As requested)
        "GEN": {
            "GEN": { cut: "190.50", vac: 1200 },
            "FEM": { cut: "175.20", vac: 400 },
            "WID": { cut: "80.50", vac: 50 },
            "DIV": { cut: "140.00", vac: 20 },
            "EX":  { cut: "110.00", vac: 100 }
        },
        "SC": {
            "GEN": { cut: "160.00", vac: 800 },
            "FEM": { cut: "145.00", vac: 250 },
            "WID": { cut: "50.00", vac: 30 },
            "DIV": { cut: "-", vac: 10 },
            "EX":  { cut: "-", vac: 40 }
        },
        "ST": {
            "GEN": { cut: "140.00", vac: 950 },
            "FEM": { cut: "130.00", vac: 300 },
            "WID": { cut: "40.00", vac: 40 },
            "DIV": { cut: "-", vac: 15 },
            "EX":  { cut: "-", vac: 50 }
        }
    }
};

const HORIZONTAL_CUTOFF = {
    "NTSP": [
        { label: "LD/CP",  cut: "162.40", vac: 552 },
        { label: "SPORTS", cut: "200.06", vac: 806 },
        { label: "VI/LV",  cut: "NA",     vac: 494 }, // Added from Image
        { label: "HI",     cut: "NA",     vac: 457 }, // Added from Image
        { label: "ID/MI",  cut: "NA",     vac: 426 }  // Added from Image
    ],
    "TSP": [
        // SAMPLE DATA
        { label: "LD/CP",  cut: "130.50", vac: 150 },
        { label: "SPORTS", cut: "150.00", vac: 200 },
        { label: "VI/LV",  cut: "NA",     vac: 50 },
        { label: "HI",     cut: "NA",     vac: 40 },
        { label: "ID/MI",  cut: "NA",     vac: 30 }
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
