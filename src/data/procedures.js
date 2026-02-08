export const groupedProcedures = [
  {
    category: "Implantology",
    procedures: [
      {code: "ImpK",description:"Implant Korean", defaultPrice: 1100},
      {code: "ImpGem",description:"Implant Germany", defaultPrice: 1300},
      {code: "MCCI",description:"Metal Ceramic Crown on Implant", defaultPrice: 250},
      {code: "ZCI",description:"Zirconium Crown On implant", defaultPrice: 315},
      {code: "MCBI",description:"Metal ceramic bridge on implant", defaultPrice: 250},
      {code: "ZBI",description:"Zirconium bridge on implant", defaultPrice: 315},
      {code: "SROAX",description:"Screw Retain on all X", defaultPrice: 1500},
      {code: "SRI",description:"Surgical Removal Implant", defaultPrice: 100},
      {code: "ABT",description:"Abutment", defaultPrice: 120},
      {code: "SIF",description:"Surgical Removal of Implant Fracture", defaultPrice: 200},
      {code: "BG n STG",description:"Bone Graft & Soft Tissure Graft (Exclude Materials)", defaultPrice: 300},
      {code: "SNL",description:"Sinus Lift (Exclude Materials)", defaultPrice: 500},
      {code: "GGGTH",description:"Gingival Graft with Tissues Harvesting", defaultPrice: 500},
      {code: "SNL1",description:"Sinus Lift", defaultPrice: 700},
    ]
  },
  {
    category: "Prosthodontics",
    procedures: [
      {code: "CO",description:"Check Occlusal", defaultPrice: 15},
      {code: "CP",description:"Check Premiea", defaultPrice: 80},
      {code: "PCNPA",description:"Metal Post core", defaultPrice: 60},
      {code: "ZCNP",description:"Zirconium post core", defaultPrice: 100},
      {code: "PFM",description:"Metal Ceramic Crown", defaultPrice: 180},
      {code: "ZCNC",description:"Zirconium crown", defaultPrice: 380},
      {code: "ACVNEM",description:"Veneer Emax", defaultPrice: 380},
      {code: "SSCR",description:"Stainless Steel Crown (Milk teeth)", defaultPrice: 65},
      {code: "MU",description:"Mox Up", defaultPrice: 50},
      {code: "PC",description:"Permanent Cement", defaultPrice: 10},
      {code: "PMMA",description:"PMMA", defaultPrice: 30},
      {code: "TT",description:"Temporary Teeth", defaultPrice: 15},
      {code: "MCB",description:"Metal Ceramic Bridge", defaultPrice: 180},
      {code: "ZB",description:"Zirconium Bridge", defaultPrice: 380},
    ]
  },
  {
    category: "Dentures",
    procedures: [
      {code: "PDTNMF",description:"Partial Denture(No Metal Frame)", defaultPrice: 500},
      {code: "PDMTF",description:"Partial Denture (Metal Frame)", defaultPrice: 650},
      {code: "FDTU",description:"Full Denture", defaultPrice: 600},
      {code: "RD",description:"Reline Denture", defaultPrice: 100},
    ]
  },
  {
    category: "Filling & Aesthetic",
    procedures: [
      {code: "FV",description:"Fluoride Varnish", defaultPrice: 25},
      {code: "CF I",description:"Composite Filling Class I", defaultPrice: 25},
      {code: "CF II(2)",description:"Composite filling Class II (2 surface)", defaultPrice: 35},
      {code: "CF II(3)",description:"Composite filling Class II (3 surface)", defaultPrice: 45},
      {code: "CF III",description:"Composite filling Class III", defaultPrice: 35},
      {code: "CF IV",description:"Composite filling Class IV", defaultPrice: 35},
      {code: "CF V(normal)",description:"Composite filling Class V normal", defaultPrice: 25},
      {code: "CF V(deep)",description:"Composite filling class V deep", defaultPrice: 35},
      {code: "G.I.R",description:"Glass-lonomer Restorative (First Surface)", defaultPrice: 25},
      {code: "FS",description:"Fissure Sealant", defaultPrice: 20},
      {code: "DCV & CAV",description:"Direct Composite Veneer & Composite Aesthetic veneer", defaultPrice: 75},
      {code: "D/SC",description:"Diastema / Space Closing", defaultPrice: 75},
    ]
  },
  {
    category: "Root Canal Treatment (RCT)",
    procedures: [
      {code: "RCPMT",description:"Root Canal Milk Teeth (Posteriror)", defaultPrice: 60},
      {code: "RCT",description:"Root Canal Treatment Anterior Teeth", defaultPrice: 100},
      {code: "RCP",description:"Root Canal Treatment Premolar Teeth", defaultPrice: 150},
      {code: "RCM",description:"Root Canal Molar Teeth", defaultPrice: 170},
      {code: "RCARC",description:"Redo-Endo Anterior Teeth", defaultPrice: 120},
      {code: "RCPRC",description:"Redo-Endo Premolar Teeth", defaultPrice: 170},
      {code: "RCMRC",description:"Redo-Endo Molar Teeth", defaultPrice: 190},
      {code: "RCPMTA",description:"Root Canal Milk Teeth(Anterior)", defaultPrice: 50},
      {code: "DC",description:"Dressing Calcium", defaultPrice: 0},
      {code: "OT",description:"Obturation (Root Seal)", defaultPrice: 0},
      {code: "OC",description:"Open Cavity", defaultPrice: 0},
      {code: "NE",description:"Necro", defaultPrice: 0},
    ]
  },
  {
    category: "Orthodontics",
    procedures: [
      {code: "MBL",description:"Metal Bracket Lower", defaultPrice: 800},
      {code: "O003",description:"Ortho Monthly Visit", defaultPrice: 50},
      {code: "RMS",description:"Remove Mini Screw", defaultPrice: 30},
      {code: "RFR",description:"Fix Retainer L/U", defaultPrice: 50},
      {code: "SCOFALZ",description:"Specialist consultation for Orthodontic with full analyzing", defaultPrice: 100},
      {code: "M Bracket",description:"Metal Bracket Upper & Lower", defaultPrice: 2000},
      {code: "C Bracket",description:"Ceramic Bracket Upper & Lower", defaultPrice: 2500},
      {code: "INVSL",description:"Invisalign(អត់ឆាបធ្មេញ)", defaultPrice: 5000},
      {code: "INVSL1",description:"Invisalign(ឆាប់ធ្មេញ)", defaultPrice: 3500},
      {code: "RET U",description:"Retainer Upper", defaultPrice: 70},
      {code: "RET L",description:"Retainer Lower", defaultPrice: 70},
      {code: "MOB",description:"Myo Brace", defaultPrice: 250},
      {code: "MOBC",description:"Myo Brace Check-up", defaultPrice: 20},
      {code: "FMK",description:"Face Mask", defaultPrice: 700},
      {code: "FBD",description:"Fix Brace 30% Depo", defaultPrice: 0},
      {code: "NB",description:"New Bracket", defaultPrice: 10},
      {code: "OB",description:"Old Bracket", defaultPrice: 5},
      {code: "Acrylic Night Guard",description:"ALNG", defaultPrice: 200},
      {code: "MNS",description:"Mini Screw", defaultPrice: 150},
      {code: "ESX U",description:"Essix Upper", defaultPrice: 50},
      {code: "ESX L",description:"Essix Lower", defaultPrice: 50},
      {code: "RMFRL",description:"Remove fix retainer lower", defaultPrice: 10},
      {code: "RMFRU",description:"Remove fix retainer upper", defaultPrice: 10},
      {code: "RB",description:"Remove Bracket", defaultPrice: 50},
    ]
  },
  {
    category: "Extraction",
    procedures: [
      {code: "Ex JR",description:"Extraction Just Root", defaultPrice: 30},
      {code: "Ex Ant",description:"Extraction Anterior Teeth", defaultPrice: 50},
      {code: "Ex Pre",description:"Extraction Premolar Teeth", defaultPrice: 50},
      {code: "Ex Mo",description:"Extraction Molar Teeth", defaultPrice: 70},
      {code: "Ex M",description:"Extraction Milk Teeth", defaultPrice: 20},
    ]
  },
  {
    category: "Surgery",
    procedures: [
      {code: "CLC",description:"Colacone", defaultPrice: 30},
      {code: "Sur Ext",description:"Surgical Extraction", defaultPrice: 150},
      {code: "Sur Simple Imp",description:"Surgical Removal of Simple Impacted Tooth", defaultPrice: 250},
      {code: "Sur complicated Imp",description:"Surgical Removal of Complicated impacted tooth", defaultPrice: 350},
      {code: "OS1",description:"Oral Surgery impacted tooth - Level 1", defaultPrice: 250},
      {code: "OS2",description:"Oral Surgery impacted tooth - Level 2", defaultPrice: 350},
      {code: "OS3",description:"Oral Surgery impacted tooth - Level 3", defaultPrice: 450},
      {code: "APC",description:"Apicectomy (Bone Graf)", defaultPrice: 150},
      {code: "APCBG",description:"Apicetomy + Bone Graf", defaultPrice: 400},
      {code: "CLU",description:"Crown Lengthening Upper", defaultPrice: 700},
      {code: "CLL",description:"Crown Lengthening Lower", defaultPrice: 700},
      {code: "GGT",description:"Ginggivectomy", defaultPrice: 10},
    ]
  },
  {
    category: "Periodontic",
    procedures: [
      {code: "RPUF",description:"Root Planning Under L.A per Quadrant (Flapless)", defaultPrice: 50},
      {code: "RPUOF",description:"Root Plannng Under L.A per Quadrant (Openflap)", defaultPrice: 250},
    ]
  },
  {
    category: "Snoring & Sleep Apnea",
    procedures: [
      {code: "OE",description:"Full mouth occlusal equilibration", defaultPrice: 200},
      {code: "TDAP",description:"Test & Diagnosis by Apnealink Plus", defaultPrice: 200},
      {code: "ORAPN",description:"Oral Appliance", defaultPrice: 2500},
    ]
  },
  {
    category: "Teeth Whitening",
    procedures: [
      {code: "LW",description:"Laser Whitening", defaultPrice: 180},
      {code: "WHK",description:"Whitening-Home kit", defaultPrice: 150},
      {code: "LW + WHK",description:"Laser whitening + Whitening-Home kit", defaultPrice: 280},
    ]
  },
  {
    category: "Product",
    procedures: [
      {code: "ART",description:"Pealie White ART", defaultPrice: 10},
      {code: "AUG",description:"Augmentin 1g", defaultPrice: 15},
      {code: "P_W",description:"Pealie White", defaultPrice: 5.5},
      {code: "CB",description:"Celebrix 200mg", defaultPrice: 0},
      {code: "DEX",description:"Dexamethasone 0.5 mg", defaultPrice: 0},
      {code: "DFW",description:"Dental Floss Wax", defaultPrice: 3},
      {code: "DOL1000mg",description:"Doliprane (1000mg)", defaultPrice: 3},
      {code: "DOL500mg",description:"Doliprane (500mg)", defaultPrice: 3},
      {code: "DW",description:"Dental Wax", defaultPrice: 1.5},
      {code: "GOF",description:"Gofen (400mg)", defaultPrice: 8},
      {code: "IDB",description:"Inter Dental Brush", defaultPrice: 15},
      {code: "OB",description:"Ortho Box", defaultPrice: 5},
      {code: "OMZ",description:"Omeprazole", defaultPrice: 8},
      {code: "BS",description:"Brush Set", defaultPrice: 5},
      {code: "WF",description:"Water Floss", defaultPrice: 25},
    ]
  },
  {
    category: "Free",
    procedures: [
      {code: "LA",description:"Anesthesia", defaultPrice: 0},
      {code: "Fol",description:"Follow up", defaultPrice: 0},
      {code: "FS",description:"Face Scan", defaultPrice: 0},
      {code: "SutRem",description:"Suture Remove", defaultPrice: 0},
      {code: "CB",description:"Cut Bridge", defaultPrice: 0},
      {code: "CC",description:"Cut Crown", defaultPrice: 0},
      {code: "PCMPC",description:"Permanent Cement Metal Post core", defaultPrice: 0},
      {code: "PCNT",description:"Permanent Cement On Natural Teeth", defaultPrice: 0},
      {code: "PCOI",description:"Permanent Cement on Implant", defaultPrice: 0},
      {code: "PCZPC",description:"Permanent Cement Zirconium Post core", defaultPrice: 0},
      {code: "Photo",description:"Photo", defaultPrice: 0},
      {code: "TC1",description:"Temporary Cement on Implant", defaultPrice: 0},
      {code: "TC2",description:"Temporary Cement on Permanent Teeth", defaultPrice: 0},
      {code: "TC3",description:"Temporary Cement on ", defaultPrice: 0},
    ]
  },
  {
    category: "Examination",
    procedures: [
      { code: "CI", description: "Consultation Implant", defaultPrice: 0 },
      { code: "CO", description: "Consultation Ortho", defaultPrice: 0 },
      { code: "EXCL001", description: "General Examination /Consultation / Treatment Plan", defaultPrice: 15 },
      { code: "EXCL002", description: "Specialized Consultation/Treatment Plan", defaultPrice: 30 },
      { code: "RB", description: "Remove Bracket", defaultPrice: 50}
    ]
  },
  {
    category: "Cleaning",
    procedures: [
      {code: "CPGDN",description:"Cleaning & Polishing with General Dentist (Normal)", defaultPrice: 15},
      {code: "CPGDM",description:"Cleaning & Polishing with General Dentist (Medium)", defaultPrice: 20},
      {code: "CPGDH",description:"Cleaning & Polishing with General Dentist (Heavy)", defaultPrice: 30},
      {code: "DCULA",description:"Deep cleaning use L.A per Quardran", defaultPrice: 15},
      {code: "Airflow Stain Removal(Prophyjet)",description:"AFSR", defaultPrice: 50},
    ]
  },
  {
    category: "Digital X-Ray",
    procedures: [
      { code: "Ceph", description: "X-Ray - Cephalometric", defaultPrice: 20 },
      {code: "XRPB",description:"X-Ray Panoramic", defaultPrice: 20},
      {code: "XRPC",description:"X-Ray Periapical", defaultPrice: 8},
      {code: "3D CBCT",description:"3D CBCT (Cone Beam Computerized Tomography)", defaultPrice: 65},
      {code: "IOS",description:"Intra Oral Scan", defaultPrice: 20},
    ]
  },
];
