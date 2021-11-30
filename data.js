const globalData = {
    purity_type: [
        {
            name: "Impure",
            quantity: 30,
            hidden: false,
            id: 0,
        },
        {
            name: "Normal",
            quantity: 60,
            hidden: false,
            id: 1,
        },
        {
            name: "Pure",
            quantity: 120,
            hidden: false,
            id: 2,
        },
    ],
    item: [

        // MINEABLE RESOURCES
        {
            name: "Copper Ore",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Copper_Ore.png",
            hidden: false,
            id: 0,
        },
        {
            name: "Iron Ore",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Iron_Ore.png",
            hidden: false,
            id: 1,
        },
        {
            name: "Limestone Ore",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Limestone.png",
            hidden: false,
            id: 2,
        },
        {
            name: "Caterium Ore",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Caterium_Ore.png",
            hidden: false,
            id: 3,
        },
        {
            name: "Coal",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 4,
        },
        {
            name: "Sulphur",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 5,
        },
        {
            name: "Raw Quartz",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 6,
        },
        {
            name: "Bauxite Ore",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 7,
        },
        {
            name: "Uranium Ore",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 8,
        },
        {
            name: "S.A.M Ore",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: true,
            id: 9,
        },
    
    
        // LIQUIDS
        {
            name: "Water",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 10,
        },
        {
            name: "Crude Oil",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 11,
        },
    
    
        // REFINED LIQUIDS
        {
            name: "Heavy Oil Residue",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 12,
        },
        {
            name: "Liquid Biofuel",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 13,
        },
        {
            name: "Fuel",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 14,
        },
        {
            name: "Turbofuel",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal.png",
            hidden: false,
            id: 15,
        },
    
    
        // SMELTED PRODUCTS
        {
            name: "Copper Ingot",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Copper_Ingot.png",
            hidden: false,
            id: 16,
        },
        {
            name: "Iron Ingot",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Iron_Ingot.png",
            hidden: false,
            id: 17,
        },
        {
            name: "Caterium Ingot",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Caterium_Ingot.png",
            hidden: false,
            id: 18,
        },
        {
            name: "Steel Ingot",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Steel_Ingot.png",
            hidden: false,
            id: 19,
        },
        {
            name: "Aluminium Ingot",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Iron_Ingot.png",
            hidden: false,
            id: 20,
        },
        {
            name: "S.A.M. Ingot",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Generic.png",
            hidden: true,
            id: 21,
        },
    
    
        // REFINED FROM RAW RESOURCES
        {
            name: "Silica",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Silica.png",
            hidden: false,
            id: 22,
        },
        {
            name: "Quartz Crystal",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Generic.png",
            hidden: false,
            id: 23,
        },
        {
            name: "Plastic",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Plastic.png",
            hidden: false,
            id: 24,
        },
        {
            name: "Rubber",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Rubber.png",
            hidden: false,
            id: 25,
        },
        {
            name: "Polymer Resin",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Rubber.png",
            hidden: false,
            id: 26,
        },
        {
            name: "Compacted Coal",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Generic.png",
            hidden: false,
            id: 27,
        },
        {
            name: "Petroleum Coke",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Generic.png",
            hidden: false,
            id: 28,
        },
    
    
        // BASIC CONSTRUCTED ITEMS
        {
            name: "Iron Plate",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Iron_Plate.png",
            hidden: false,
            id: 29,
        },
        {
            name: "Iron Rod",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Iron_Rod.png",
            hidden: false,
            id: 30,
        },
        {
            name: "Screw",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Screw.png",
            hidden: false,
            id: 31,
        },
        {
            name: "Wire",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Wire.png",
            hidden: false,
            id: 32,
        },
        {
            name: "Cable",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Cable.png",
            hidden: false,
            id: 33,
        },
        {
            name: "Concrete",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Concrete.png",
            hidden: false,
            id: 34,
        },
    
        
        // TIER 1-2 CONSTRUCTED ITEMS
        {
            name: "Reinforced Iron Plate",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Reinforced_Iron_Plate.png",
            hidden: false,
            id: 35,
        },
        {
            name: "Modular Frame",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Modular_Frame.png",
            hidden: false,
            id: 36,
        },
        {
            name: "Copper Sheet",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Generic.png",
            hidden: false,
            id: 37,
        },
        {
            name: "Rotor",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Rotor.png",
            hidden: false,
            id: 38,
        },
        {
            name: "Quickwire",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Quickwire.png",
            hidden: false,
            id: 39,
        },
    
    
        // TIER 3-4 CONSTRUCTED ITEMS
        {
            name: "Steel Beam",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Steel_Beam.png",
            hidden: false,
            id: 40,
        },
        {
            name: "Steel Pipe",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Steel_Pipe.png",
            hidden: false,
            id: 41,
        },
        {
            name: "Encased Industrial Beam",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Encased_Industrial_Beam.png",
            hidden: false,
            id: 42,
        },
        {
            name: "Crystal Oscillator",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Generic.png",
            hidden: false,
            id: 43,
        },
        {
            name: "Stator",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Stator.png",
            hidden: false,
            id: 44,
        },
        {
            name: "Motor",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Motor.png",
            hidden: false,
            id: 45,
        },
    
    
        // TIER 5-6 CONSTRUCTED ITEMS
        {
            name: "Computer",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Computer.png",
            hidden: false,
            id: 46,
        },
        {
            name: "Heavy Modular Frame",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Heavy_Modular_Frame.png",
            hidden: false,
            id: 47,
        },
    
    
        // TIER 7-8 CONSTRUCTED ITEMS
        {
            name: "Supercomputer",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Supercomputer.png",
            hidden: false,
            id: 48,
        },
        {
            name: "Nuclear Fuel Rod",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Nuclear_Fuel_Rod.png",
            hidden: false,
            id: 49,
        },
        {
            name: "Aluminium Sheet",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Aluminum_Sheet.png",
            hidden: false,
            id: 50,
        },
        {
            name: "Heat Sink",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Heat_Sink.png",
            hidden: false,
            id: 51,
        },
        {
            name: "Radio Control Unit",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Radio_Control_Unit.png",
            hidden: false,
            id: 52,
        },
        {
            name: "Turbo Motor",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Turbo_Motor.png",
            hidden: false,
            id: 53,
        },
        {
            name: "Battery",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Battery.png",
            hidden: false,
            id: 54,
        },
    
    
        // BASIC ORGANICS
        {
            name: "Biomass",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Biomass.png",
            hidden: false,
            id: 55,
        },
        {
            name: "Solid Biofuel",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Biofuel.png",
            hidden: false,
            id: 56,
        },
    
    
        // MAM RESEARCH
        {
            name: "Circuit Board",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Circuit_Board.png",
            hidden: false,
            id: 57,
        },
        {
            name: "A.I. Limiter",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/AI_Limiter.png",
            hidden: false,
            id: 58,
        },
        {
            name: "High-Speed Connector",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/High_Speed_Connector.png",
            hidden: false,
            id: 59,
        },
    
    
        // SPECIAL SEASONAL/REMOVED
        {
            name: "Quantum Crystal",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Generic.png",
            hidden: false,
            id: 60,
        },
        {
            name: "Superposition Oscillator",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Generic.png",
            hidden: false,
            id: 61,
        },
        {
            name: "Quantum Computer",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Quantum_Computer.png",
            hidden: false,
            id: 62,
        },
    ],
    node_type: [
        {
            name: "Resource Node",
            hidden: false,
            id: 0,
        },
        {
            name: "Machine Node",
            hidden: false,
            id: 1,
        },
    ],
    machine_version: [
        {
            name: "internal",
            representation: "",
            hidden: false,
            id: 0,
        },
        {
            name: "Mk.1",
            rank: 0,
            representation: "I",
            hidden: false,
            id: 1,
        },
        {
            name: "Mk.2",
            rank: 1,
            representation: "II",
            hidden: false,
            id: 2,
        },
        {
            name: "Mk.3",
            rank: 2,
            representation: "III",
            hidden: false,
            id: 3,
        },
        {
            name: "Mk.4",
            rank: 3,
            representation: "IV",
            hidden: false,
            id: 4,
        },
        {
            name: "Mk.5",
            rank: 4,
            representation: "V",
            hidden: false,
            id: 5,
        },
        {
            name: "Mk.6",
            rank: 5,
            representation: "VI",
            hidden: false,
            id: 6,
        },
        {
            name: "S",
            rank: 6,
            representation: "S",
            hidden: false,
            id: 7,
        },
        {
            name: "M",
            rank: 7,
            representation: "M",
            hidden: false,
            id: 8,
        },
    ],
    path_type: [
        {
            name: "Item Belt Mk 1",
            speed: 60,
            machine_version_id: 1,
            rank: 0,
            hidden: false,
            id: 0,
        },
        {
            name: "Item Belt Mk 2",
            speed: 120,
            machine_version_id: 2,
            rank: 1,
            hidden: false,
            id: 1,
        },
        {
            name: "Item Belt Mk 3",
            speed: 270,
            machine_version_id: 3,
            rank: 2,
            hidden: false,
            id: 2,
        },
        {
            name: "Item Belt Mk 4",
            speed: 480,
            machine_version_id: 4,
            rank: 3,
            hidden: false,
            id: 3,
        },
        {
            name: "Item Belt Mk 5",
            speed: 720,
            machine_version_id: 5,
            rank: 4,
            hidden: false,
            id: 4,
        },
        {
            name: "internal",
            speed: 9999999,
            machine_version_id: 0,
            rank: -1,
            hidden: false,
            id: 6,
        },
    ],
    machine_class: [

        // RESOURCE GATHERING
        {
            name: "Miner",
            plural: "Miners",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Miner_MK1.png",
            node_type_id: 0,
            hidden: false,
            id: 0,
        },
        {
            name: "Pump",
            plural: "Pumps",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Oil_Pump.png",
            node_type_id: 0,
            hidden: true,
            id: 1,
        },


        // RESOURCE REFINEMENT
        {
            name: "Constructor",
            plural: "Constructors",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Constructor.png",
            node_type_id: 1,
            hidden: false,
            id: 2,
        },
        {
            name: "Assembler",
            plural: "Assemblers",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Assembler.png",
            node_type_id: 1,
            hidden: false,
            id: 3,
        },
        {
            name: "Manufacturer",
            plural: "Manufacturer",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Manufacturer.png",
            node_type_id: 1,
            hidden: false,
            id: 4,
        },
        {
            name: "Smelter",
            plural: "Smelters",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Smelter.png",
            node_type_id: 1,
            hidden: false,
            id: 5,
        },
        {
            name: "Foundry",
            plural: "Foundries",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Foundry_MK1.png",
            node_type_id: 1,
            hidden: false,
            id: 6,
        },
        {
            name: "Refinery",
            plural: "Refineries",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Oil_Refinery.png",
            node_type_id: 1,
            hidden: false,
            id: 7,
        },


        // LOGISTICS
        {
            name: "Container",
            plural: "Containers",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Storage_Container_MK1.png",
            node_type_id: 0,
            hidden: false,
            id: 8,
        },
        {
            name: "Logistic",
            plural: "Logistics",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Splitter.png",
            node_type_id: 0,
            hidden: false,
            id: 9,
        },


        // POWER PRODUCTION
        {
            name: "Generator",
            plural: "Generators",
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal_Generator.png",
            node_type_id: 0,
            hidden: false,
            id: 10,
        },
    ],
    machine_node: [
        {
            name: "Container",
            machine_version_id: 1,
            machine_class_id: 8,
            speed: 999999,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Storage_Container_MK1.png",
            input_slots: 1,
            output_slots: 1,
            hidden: false,
            id: 0,
        },
        {
            name: "Splitter",
            machine_version_id: 7,
            machine_class_id: 9,
            speed: 999999,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Splitter.png",
            input_slots: 1,
            output_slots: 3,
            hidden: false,
            id: 2,
        },
        {
            name: "Merger",
            machine_version_id: 8,
            machine_class_id: 9,
            speed: 999999,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Merger.png",
            input_slots: 3,
            output_slots: 1,
            hidden: false,
            id: 3,
        },
        {
            name: "Miner Mk.1",
            machine_version_id: 1,
            machine_class_id: 0,
            speed: 100,
            power: 5,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Miner_MK1.png",
            input_slots: 0,
            output_slots: 1,
            hidden: false,
            id: 4,
        },
        {
            name: "Miner Mk.2",
            machine_version_id: 2,
            machine_class_id: 0,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Miner_MK2.png",
            speed: 200,
            power: 12,
            hidden: true,
            input_slots: 0,
            output_slots: 1,
            id: 5,
        },
        {
            name: "Miner Mk.3",
            machine_version_id: 3,
            machine_class_id: 0,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Miner_MK2.png",
            speed: 300,
            power: 45,
            hidden: true,
            input_slots: 0,
            output_slots: 1,
            id: 6,
        },
        {
            name: "Oil Pump",
            machine_version_id: 1,
            machine_class_id: 1,
            speed: 200,
            power: 40,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Oil_Pump.png",
            input_slots: 0,
            output_slots: 1,
            hidden: false,
            id: 7,
        },
        {
            name: "Water Pump",
            machine_version_id: 1,
            machine_class_id: 1,
            speed: 200,
            power: 40,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Oil_Pump.png",
            input_slots: 0,
            output_slots: 1,
            hidden: false,
            id: 8,
        },
        {
            name: "Smelter",
            machine_version_id: 1,
            machine_class_id: 5,
            speed: 100,
            power: 4,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Smelter.png",
            input_slots: 1,
            output_slots: 1,
            hidden: false,
            id: 9,
        },
        {
            name: "Foundry",
            machine_version_id: 1,
            machine_class_id: 6,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Foundry_MK1.png",
            speed: 100,
            power: 16,
            hidden: false,
            input_slots: 2,
            output_slots: 1,
            id: 10,
        },
        {
            name: "Constructor",
            machine_version_id: 1,
            machine_class_id: 2,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Constructor.png",
            speed: 100,
            power: 4,
            input_slots: 1,
            output_slots: 1,
            hidden: false,
            id: 11,
        },
        {
            name: "Assembler",
            machine_version_id: 1,
            machine_class_id: 3,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Assembler.png",
            speed: 100,
            power: 15,
            input_slots: 2,
            output_slots: 1,
            hidden: false,
            id: 12,
        },
        {
            name: "Manufacturer",
            machine_version_id: 1,
            machine_class_id: 4,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Manufacturer.png",
            speed: 100,
            power: 55,
            hidden: false,
            input_slots: 4,
            output_slots: 1,
            id: 13,
        },
        {
            name: "Refinery",
            machine_version_id: 1,
            machine_class_id: 7,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Oil_Refinery.png",
            speed: 100,
            power: 50,
            input_slots: 2,
            output_slots: 2,
            hidden: false,
            id: 14,
        },
        {
            name: "Biomass Burner",
            machine_version_id: 1,
            machine_class_id: 10,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Biomass_Burner.png",
            speed: 100,
            power: -20,
            hidden: true,
            input_slots: 1,
            output_slots: 0,
            id: 15,
        },
        {
            name: "Coal Generator",
            machine_version_id: 1,
            machine_class_id: 10,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Coal_Generator.png",
            speed: 100,
            power: -50,
            hidden: true,
            input_slots: 1,
            output_slots: 0,
            id: 16,
        },
        {
            name: "Fuel Generator",
            machine_version_id: 1,
            machine_class_id: 10,
            icon: "https://raw.githubusercontent.com/rhocode/rhocode.github.io/master/img/satoolsfactory_icons/Fuel_Generator.png",
            speed: 100,
            power: -150,
            hidden: true,
            input_slots: 1,
            output_slots: 0,
            id: 17,
        },
    ],
    spring_type: [
        {
            name: "Miner",
            hidden: false,
            id: 0,
        },
        {
            name: "Pump",
            hidden: false,
            id: 1,
        },
        {
            name: "Container",
            hidden: false,
            id: 2,
        },
    ],
    player_unlock: [
        {
            name: "Reinforced Iron Plate (Alt.)",
            hidden: false,
            id: 0,
        },
        {
            name: "Stitched Iron Plate",
            hidden: false,
            id: 1,
        },
        {
            name: "Caterium Wire",
            hidden: false,
            id: 2,
        },
        {
            name: "Encased Industrial Beam (Alt.)",
            hidden: false,
            id: 3,
        },
        {
            name: "Heavy Modular Frame (Alt.)",
            hidden: false,
            id: 4,
        },
        {
            name: "Iron Ingot (Alt.)",
            hidden: false,
            id: 5,
        },
        {
            name: "Iron Wire",
            hidden: false,
            id: 6,
        },
        {
            name: "Modular Frame (Alt.)",
            hidden: false,
            id: 7,
        },
        {
            name: "Rotor (Alt.)",
            hidden: false,
            id: 8,
        },
        {
            name: "Stator (Alt.)",
            hidden: false,
            id: 9,
        },
        {
            name: "Steel Ingot (Alt.)",
            hidden: false,
            id: 10,
        },
        {
            name: "Alternative: Screw (Cast Screw)",
            hidden: false,
            id: 11,
        },
        {
            name: "Quickwire (Alt.)",
            hidden: false,
            id: 12,
        },
        {
            name: "Rubber Cable",
            hidden: false,
            id: 13,
        },
        {
            name: "Circuit Board (Alt.)",
            hidden: false,
            id: 14,
        },
        {
            name: "Caterium Circuit Board",
            hidden: false,
            id: 15,
        },
        {
            name: "Caterium Computer",
            hidden: false,
            id: 16,
        },
        {
            name: "Compacted Coal (Alt.)",
            hidden: false,
            id: 17,
        },
        {
            name: "Silica (Alt.)",
            hidden: false,
            id: 18,
        },
        {
            name: "Crystal Oscillator (Alt.)",
            hidden: false,
            id: 19,
        },
    ],
    spring: [

        // Copper
        {
            item_id: 0,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: false,
            id: 0,
        },

        // Iron
        {
            item_id: 1,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: false,
            id: 1,
        },

        // Limestone
        {
            item_id: 2,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: false,
            id: 2,
        },

        // Caterium
        {
            item_id: 3,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: false,
            id: 3,
        },

        // Coal
        {
            item_id: 4,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: false,
            id: 4,
        },

        // Sulphur
        {
            item_id: 5,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: false,
            id: 5,
        },

        // Raw Quartz
        {
            item_id: 6,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: false,
            id: 6,
        },

        // Bauxite Ore
        {
            item_id: 7,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: false,
            id: 7,
        },

        // Uranium Ore
        {
            item_id: 8,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: false,
            id: 8,
        },

        // S.A.M. Ore
        {
            item_id: 9,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: true,
            id: 9,
        },

        // Water
        {
            item_id: 10,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: true,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 120,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: true,
                    id: 2,
                },
            ],
            hidden: false,
            id: 10,
        },

        // Crude Oil
        {
            item_id: 11,
            machine_class_id: 0,
            spring_type_id: 0,
            purities: [
                {
                    name: "Impure",
                    quantity: 30,
                    hidden: false,
                    id: 0,
                },
                {
                    name: "Normal",
                    quantity: 60,
                    hidden: false,
                    id: 1,
                },
                {
                    name: "Pure",
                    quantity: 120,
                    hidden: false,
                    id: 2,
                },
            ],
            hidden: false,
            id: 11,
        },
        {
            machine_class_id: 8,
            spring_type_id: 2,
            hidden: false,
            id: 12,
        },
    ],
    recipe: [
        {
            name: "Iron Ingot",
            inputs: [
                {
                    item_id: 1,
                    quantity: 1,
                },
            ],
            machine_class_id: 5,
            item_id: 4,
            time: 2,
            power: 4,
            quantity: 1,
            hidden: false,
            id: 0,
        },
        {
            name: "Copper Ingot",
            inputs: [
                {
                    item_id: 0,
                    quantity: 1,
                },
            ],
            machine_class_id: 5,
            item_id: 5,
            time: 2,
            quantity: 1,
            hidden: false,
            id: 1,
        },
        {
            name: "Caterium Ingot",
            inputs: [
                {
                    item_id: 15,
                    quantity: 3,
                },
            ],
            machine_class_id: 5,
            item_id: 16,
            time: 4,
            quantity: 1,
            hidden: false,
            id: 2,
        },
        {
            name: "Iron Plate",
            inputs: [
                {
                    item_id: 4,
                    quantity: 3,
                },
            ],
            machine_class_id: 0,
            item_id: 6,
            time: 6,
            quantity: 2,
            hidden: false,
            id: 3,
        },
        {
            name: "Iron Rod",
            inputs: [
                {
                    item_id: 4,
                    quantity: 1,
                },
            ],
            machine_class_id: 0,
            item_id: 7,
            time: 4,
            quantity: 1,
            hidden: false,
            id: 4,
        },
        {
            name: "Wire",
            inputs: [
                {
                    item_id: 5,
                    quantity: 1,
                },
            ],
            machine_class_id: 0,
            item_id: 9,
            time: 4,
            quantity: 2,
            hidden: false,
            id: 5,
        },
        {
            name: "Iron Wire",
            inputs: [
                {
                    item_id: 4,
                    quantity: 5,
                },
            ],
            machine_class_id: 0,
            item_id: 9,
            time: 24,
            quantity: 9,
            hidden: true,
            player_unlock_id: 6,
            id: 6,
        },
        {
            name: "Caterium Wire",
            inputs: [
                {
                    item_id: 16,
                    quantity: 1,
                },
            ],
            machine_class_id: 0,
            item_id: 9,
            time: 8,
            quantity: 4,
            hidden: true,
            player_unlock_id: 2,
            id: 7,
        },
        {
            name: "Cable",
            inputs: [
                {
                    item_id: 9,
                    quantity: 2,
                },
            ],
            machine_class_id: 0,
            item_id: 10,
            time: 4,
            quantity: 1,
            hidden: false,
            id: 8,
        },
        {
            name: "Screw",
            inputs: [
                {
                    item_id: 7,
                    quantity: 1,
                },
            ],
            machine_class_id: 0,
            item_id: 8,
            time: 6,
            quantity: 4,
            hidden: false,
            id: 9,
        },
        {
            name: "Alternative: Screw (Cast Screw)",
            inputs: [
                {
                    item_id: 4,
                    quantity: 5,
                },
            ],
            machine_class_id: 0,
            item_id: 8,
            time: 24,
            quantity: 20,
            hidden: false,
            player_unlock_id: 11,
            id: 10,
        },
        {
            name: "Alternative: Screw (Steel Screw)",
            inputs: [
                {
                    item_id: 19,
                    quantity: 1,
                },
            ],
            machine_class_id: 0,
            item_id: 8,
            time: 12,
            quantity: 52,
            hidden: false,
            player_unlock_id: 11,
            id: 55,
        },
        {
            name: "Concrete",
            inputs: [
                {
                    item_id: 2,
                    quantity: 3,
                },
            ],
            machine_class_id: 0,
            item_id: 11,
            time: 4,
            quantity: 1,
            hidden: false,
            id: 11,
        },
        {
            name: "Alternative: Concrete",
            inputs: [
                {
                    item_id: 2,
                    quantity: 3,
                },
            ],
            machine_class_id: 0,
            item_id: 11,
            time: 4,
            quantity: 1,
            hidden: false,
            id: 11,
        },
        {
            name: "Alternative: Concrete (Wet Concrete)",
            inputs: [
                {
                    item_id: 2,
                    quantity: 6,
                },
                //{ WATER
                //    item_id: 69,
                //    quantity: 5,
                //},
            ],
            machine_class_id: 0,
            item_id: 11,
            time: 3,
            quantity: 4,
            hidden: true,
            id: 11,
        },
        {
            name: "Reinforced Iron Plate",
            inputs: [
                {
                    item_id: 6,
                    quantity: 6,
                },
                {
                    item_id: 8,
                    quantity: 12,
                },
            ],
            machine_class_id: 3,
            item_id: 12,
            time: 12,
            quantity: 1,
            hidden: false,
            id: 12,
        },
        {
            name: "Alternative: Reinforced Iron Plate (Bolted Iron Plate)",
            inputs: [
                {
                    item_id: 6,
                    quantity: 16,
                },
                {
                    item_id: 8,
                    quantity: 250,
                },
            ],
            machine_class_id: 3,
            item_id: 12,
            time: 12,
            quantity: 3,
            hidden: true,
            player_unlock_id: 0,
            id: 13,
        },
        {
            name: "Alternative: Reinforced Iron Plate (Stitched Iron Plate)",
            inputs: [
                {
                    item_id: 6,
                    quantity: 10,
                },
                {
                    item_id: 9,
                    quantity: 20,
                },
            ],
            machine_class_id: 3,
            item_id: 12,
            time: 32,
            quantity: 3,
            hidden: false,
            player_unlock_id: 1,
            id: 14,
        },
        {
            name: "Rotor",
            inputs: [
                {
                    item_id: 7,
                    quantity: 5,
                },
                {
                    item_id: 8,
                    quantity: 25,
                },
            ],
            machine_class_id: 3,
            item_id: 14,
            time: 15,
            quantity: 1,
            hidden: false,
            id: 15,
        },
        {
            name: "Alternative: Rotor (Steel Rotor)",
            inputs: [
                {
                    item_id: 20,
                    quantity: 2,
                },
                {
                    item_id: 9,
                    quantity: 12,
                },
            ],
            machine_class_id: 3,
            item_id: 14,
            time: 12,
            quantity: 1,
            hidden: false,
            player_unlock_id: 8,
            id: 16,
        },
        {
            name: "Alternative: Rotor (Copper Rotor)",
            inputs: [
                {
                    item_id: 57,
                    quantity: 6,
                },
                {
                    item_id: 8,
                    quantity: 52,
                },
            ],
            machine_class_id: 3,
            item_id: 14,
            time: 16,
            quantity: 3,
            hidden: false,
            player_unlock_id: 8,
            id: 57,
        },
        {
            name: "Modular Frame",
            inputs: [
                {
                    item_id: 12,
                    quantity: 3,
                },
                {
                    item_id: 7,
                    quantity: 12,
                },
            ],
            machine_class_id: 3,
            item_id: 13,
            time: 60,
            quantity: 2,
            hidden: false,
            id: 17,
        },
        {
            name: "Alternative: Modular Frame (Bolted Frame)",
            inputs: [
                {
                    item_id: 8,
                    quantity: 56,
                },
                {
                    item_id: 12,
                    quantity: 3,
                },
            ],
            machine_class_id: 3,
            item_id: 13,
            time: 24,
            quantity: 2,
            hidden: false,
            player_unlock_id: 7,
            id: 58,
        },
        {
            name: "Alternative: Modular Frame (Steeled Frame)",
            inputs: [
                {
                    item_id: 12,
                    quantity: 2,
                },
                {
                    item_id: 20,
                    quantity: 10,
                },
            ],
            machine_class_id: 3,
            item_id: 13,
            time: 60,
            quantity: 3,
            hidden: false,
            player_unlock_id: 7,
            id: 18,
        },
        {
            name: "Encased Industrial Beam",
            inputs: [
                {
                    item_id: 19,
                    quantity: 4,
                },
                {
                    item_id: 11,
                    quantity: 5,
                },
            ],
            machine_class_id: 3,
            item_id: 21,
            time: 10,
            quantity: 1,
            hidden: false,
            id: 19,
        },
        {
            name: "Encased Industrial Beam (Alt.)",
            inputs: [
                {
                    item_id: 20,
                    quantity: 7,
                },
                {
                    item_id: 11,
                    quantity: 5,
                },
            ],
            machine_class_id: 3,
            item_id: 21,
            time: 15,
            quantity: 1,
            hidden: true,
            player_unlock_id: 3,
            id: 20,
        },
        {
            name: "Heavy Modular Frame",
            inputs: [
                {
                    item_id: 13,
                    quantity: 5,
                },
                {
                    item_id: 21,
                    quantity: 5,
                },
                {
                    item_id: 20,
                    quantity: 15,
                },
                {
                    item_id: 8,
                    quantity: 100,
                },
            ],
            machine_class_id: 7,
            item_id: 23,
            time: 30,
            quantity: 1,
            hidden: false,
            id: 21,
        },
        {
            name: "Heavy Modular Frame (Alt.)",
            inputs: [
                {
                    item_id: 13,
                    quantity: 8,
                },
                {
                    item_id: 21,
                    quantity: 10,
                },
                {
                    item_id: 20,
                    quantity: 36,
                },
                {
                    item_id: 11,
                    quantity: 22,
                },
            ],
            machine_class_id: 7,
            item_id: 23,
            time: 64,
            quantity: 3,
            hidden: true,
            player_unlock_id: 4,
            id: 22,
        },
        {
            name: "Iron Ingot (Alt.)",
            inputs: [
                {
                    item_id: 1,
                    quantity: 2,
                },
                {
                    item_id: 0,
                    quantity: 2,
                },
            ],
            machine_class_id: 10,
            item_id: 4,
            time: 6,
            quantity: 5,
            hidden: true,
            player_unlock_id: 5,
            id: 23,
        },
        {
            name: "Steel Ingot",
            inputs: [
                {
                    item_id: 1,
                    quantity: 3,
                },
                {
                    item_id: 3,
                    quantity: 3,
                },
            ],
            machine_class_id: 10,
            item_id: 18,
            time: 4,
            quantity: 2,
            hidden: false,
            id: 24,
        },
        {
            name: "Steel Ingot (Alt.)",
            inputs: [
                {
                    item_id: 4,
                    quantity: 3,
                },
                {
                    item_id: 3,
                    quantity: 3,
                },
            ],
            machine_class_id: 10,
            item_id: 18,
            time: 4,
            quantity: 3,
            hidden: true,
            player_unlock_id: 10,
            id: 25,
        },
        {
            name: "Steel Beam",
            inputs: [
                {
                    item_id: 18,
                    quantity: 4,
                },
            ],
            machine_class_id: 0,
            item_id: 19,
            time: 4,
            quantity: 1,
            hidden: false,
            id: 26,
        },
        {
            name: "Steel Pipe",
            inputs: [
                {
                    item_id: 18,
                    quantity: 3,
                },
            ],
            machine_class_id: 0,
            item_id: 20,
            time: 6,
            quantity: 2,
            hidden: false,
            id: 27,
        },
        {
            name: "Quickwire",
            inputs: [
                {
                    item_id: 16,
                    quantity: 1,
                },
            ],
            machine_class_id: 0,
            item_id: 17,
            time: 5,
            quantity: 5,
            hidden: false,
            id: 28,
        },
        {
            name: "Quickwire (Alt.)",
            inputs: [
                {
                    item_id: 16,
                    quantity: 1,
                },
                {
                    item_id: 5,
                    quantity: 2,
                },
            ],
            machine_class_id: 3,
            item_id: 17,
            time: 8,
            quantity: 12,
            hidden: true,
            player_unlock_id: 12,
            id: 29,
        },
        {
            name: "Motor",
            inputs: [
                {
                    item_id: 14,
                    quantity: 2,
                },
                {
                    item_id: 22,
                    quantity: 2,
                },
            ],
            machine_class_id: 3,
            item_id: 24,
            time: 12,
            quantity: 1,
            hidden: false,
            id: 30,
        },
        {
            name: "Aluminum Ingot",
            inputs: [
                {
                    item_id: 28,
                    quantity: 7,
                },
                {
                    item_id: 30,
                    quantity: 6,
                },
            ],
            machine_class_id: 10,
            item_id: 41,
            time: 4,
            quantity: 2,
            hidden: false,
            id: 31,
        },
        {
            name: "S.A.M. Ingot",
            inputs: [
                {
                    item_id: 29,
                    quantity: 6,
                },
            ],
            machine_class_id: 5,
            item_id: 52,
            time: 12,
            quantity: 1,
            hidden: true,
            id: 32,
        },
        {
            name: "Biofuel",
            inputs: [
                {
                    item_id: 50,
                    quantity: 4,
                },
            ],
            machine_class_id: 0,
            item_id: 51,
            time: 4,
            quantity: 2,
            hidden: false,
            id: 33,
        },
        {
            name: "A.I. Limiter",
            inputs: [
                {
                    item_id: 35,
                    quantity: 1,
                },
                {
                    item_id: 17,
                    quantity: 18,
                },
            ],
            machine_class_id: 3,
            item_id: 37,
            time: 12,
            quantity: 1,
            hidden: false,
            id: 34,
        },
        {
            name: "Circuit Board",
            inputs: [
                {
                    item_id: 9,
                    quantity: 12,
                },
                {
                    item_id: 32,
                    quantity: 6,
                },
            ],
            machine_class_id: 3,
            item_id: 35,
            time: 12,
            quantity: 1,
            hidden: false,
            id: 35,
        },
        {
            name: "Circuit Board (Alt.)",
            inputs: [
                {
                    item_id: 34,
                    quantity: 16,
                },
                {
                    item_id: 9,
                    quantity: 24,
                },
            ],
            machine_class_id: 3,
            item_id: 35,
            time: 24,
            quantity: 3,
            player_unlock_id: 14,
            hidden: false,
            id: 36,
        },
        {
            name: "Caterium Circuit Board",
            inputs: [
                {
                    item_id: 32,
                    quantity: 12,
                },
                {
                    item_id: 17,
                    quantity: 32,
                },
            ],
            machine_class_id: 3,
            item_id: 35,
            time: 24,
            quantity: 3,
            player_unlock_id: 15,
            hidden: false,
            id: 37,
        },
        {
            name: "Rubber Cable",
            inputs: [
                {
                    item_id: 9,
                    quantity: 3,
                },
                {
                    item_id: 34,
                    quantity: 2,
                },
            ],
            machine_class_id: 3,
            item_id: 10,
            time: 8,
            quantity: 10,
            player_unlock_id: 13,
            hidden: false,
            id: 38,
        },
        {
            name: "Computer",
            inputs: [
                {
                    item_id: 35,
                    quantity: 5,
                },
                {
                    item_id: 10,
                    quantity: 12,
                },
                {
                    item_id: 32,
                    quantity: 18,
                },
                {
                    item_id: 8,
                    quantity: 60,
                },
            ],
            machine_class_id: 7,
            item_id: 36,
            time: 32,
            quantity: 1,
            hidden: false,
            id: 39,
        },
        {
            name: "Caterium Computer",
            inputs: [
                {
                    item_id: 17,
                    quantity: 112,
                },
                {
                    item_id: 35,
                    quantity: 10,
                },
                {
                    item_id: 34,
                    quantity: 48,
                },
            ],
            machine_class_id: 7,
            item_id: 36,
            time: 64,
            quantity: 3,
            player_unlock_id: 16,
            hidden: false,
            id: 40,
        },
        {
            name: "Supercomputer",
            inputs: [
                {
                    item_id: 36,
                    quantity: 2,
                },
                {
                    item_id: 37,
                    quantity: 2,
                },
                {
                    item_id: 39,
                    quantity: 3,
                },
                {
                    item_id: 32,
                    quantity: 21,
                },
            ],
            machine_class_id: 7,
            item_id: 38,
            time: 32,
            quantity: 1,
            hidden: false,
            id: 41,
        },
        {
            name: "High-Speed Connector",
            inputs: [
                {
                    item_id: 17,
                    quantity: 40,
                },
                {
                    item_id: 10,
                    quantity: 10,
                },
                {
                    item_id: 32,
                    quantity: 6,
                },
            ],
            machine_class_id: 7,
            item_id: 39,
            time: 24,
            quantity: 1,
            hidden: false,
            id: 42,
        },
        {
            name: "Fuel",
            inputs: [
                {
                    item_id: 25,
                    quantity: 8,
                },
            ],
            machine_class_id: 4,
            item_id: 33,
            time: 8,
            quantity: 5,
            hidden: false,
            id: 43,
        },
        {
            name: "Plastic",
            inputs: [
                {
                    item_id: 25,
                    quantity: 4,
                },
            ],
            machine_class_id: 4,
            item_id: 32,
            time: 8,
            quantity: 3,
            hidden: false,
            id: 44,
        },
        {
            name: "Rubber",
            inputs: [
                {
                    item_id: 25,
                    quantity: 4,
                },
            ],
            machine_class_id: 4,
            item_id: 34,
            time: 8,
            quantity: 4,
            hidden: false,
            id: 45,
        },
        {
            name: "Stator",
            inputs: [
                {
                    item_id: 20,
                    quantity: 3,
                },
                {
                    item_id: 9,
                    quantity: 10,
                },
            ],
            machine_class_id: 3,
            item_id: 22,
            time: 10,
            quantity: 1,
            hidden: false,
            id: 46,
        },
        {
            name: "Stator (Alt.)",
            inputs: [
                {
                    item_id: 20,
                    quantity: 6,
                },
                {
                    item_id: 17,
                    quantity: 25,
                },
            ],
            machine_class_id: 3,
            item_id: 22,
            time: 20,
            quantity: 3,
            player_unlock_id: 9,
            hidden: false,
            id: 47,
        },
        {
            name: "Battery",
            inputs: [
                {
                    item_id: 42,
                    quantity: 8,
                },
                {
                    item_id: 27,
                    quantity: 20,
                },
                {
                    item_id: 32,
                    quantity: 9,
                },
                {
                    item_id: 9,
                    quantity: 24,
                },
            ],
            machine_class_id: 7,
            item_id: 46,
            time: 32,
            quantity: 3,
            hidden: false,
            id: 48,
        },
        {
            name: "Compacted Coal (Alt.)",
            inputs: [
                {
                    item_id: 3,
                    quantity: 3,
                },
                {
                    item_id: 27,
                    quantity: 3,
                },
            ],
            machine_class_id: 3,
            item_id: 53,
            time: 6,
            quantity: 3,
            player_unlock_id: 17,
            hidden: false,
            id: 49,
        },
        {
            name: "Silica (Alt.)",
            inputs: [
                {
                    item_id: 26,
                    quantity: 4,
                },
                {
                    item_id: 2,
                    quantity: 2,
                },
            ],
            machine_class_id: 3,
            item_id: 30,
            time: 8,
            quantity: 9,
            player_unlock_id: 18,
            hidden: false,
            id: 50,
        },
        {
            name: "Quartz Crystal",
            inputs: [
                {
                    item_id: 26,
                    quantity: 2,
                },
            ],
            machine_class_id: 0,
            item_id: 55,
            time: 4,
            quantity: 1,
            hidden: false,
            id: 51,
        },
        {
            name: "Quantum Crystal",
            inputs: [
                {
                    item_id: 55,
                    quantity: 6,
                },
                {
                    item_id: 56,
                    quantity: 12,
                },
            ],
            machine_class_id: 3,
            item_id: 47,
            time: 24,
            quantity: 1,
            hidden: false,
            id: 52,
        },
        {
            name: "Crystal Oscillator (Alt.)",
            inputs: [
                {
                    item_id: 55,
                    quantity: 20,
                },
                {
                    item_id: 34,
                    quantity: 24,
                },
                {
                    item_id: 37,
                    quantity: 1,
                },
            ],
            machine_class_id: 7,
            item_id: 54,
            time: 64,
            quantity: 1,
            player_unlock_id: 19,
            hidden: false,
            id: 53,
        },
        {
            name: "Crystal Oscillator",
            inputs: [
                {
                    item_id: 55,
                    quantity: 10,
                },
                {
                    item_id: 10,
                    quantity: 14,
                },
                {
                    item_id: 12,
                    quantity: 4,
                },
            ],
            machine_class_id: 7,
            item_id: 54,
            time: 32,
            quantity: 1,
            hidden: false,
            id: 54,
        },
    ],
};
export default globalData;
