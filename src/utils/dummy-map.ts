export interface RegionType {
    id: number | string;
    locationId?: number | string;
    region: | 'Toshkent' | 'Samarqand' | 'Andijan' | 'Buxoro' | 'Farg‘ona' | 'Namangan' | 'Navoiy' | 'Surxondaryo' | 'Qashqadaryo' | 'Jizzax' | 'Sirdaryo' | 'Xorazm' | 'Qoraqalpog‘iston';
    category: "Furniture & Interior" | "Home & Construction Services" | "Personal Care & Maintenance" | "Automotive Services" | "Education & Learning" | "Food & Business Places";
    items: (
    "Furniture workshop" | "Soft furniture" | "Hard furniture" | "Kitchen furniture" | "Furniture repair service" | 
    "Home repair service" | "Air conditioner installation service" | "Carpentry workshop" | "Plumbing service" | "Electrical repair service" |
    "Barbershop" | "Dry cleaning" |
    "Car repair workshop" | "Auto service center" |
    "Training center" | "Language school" |
    "Kitchen" | "Café" | "Restaurant" | "Shop" | "Mosque" | "Bakery")[];
    neighborhoods: string[];
    district: string;
    address: string;
    latitude: number;
    longitude: number;
    radius: number;
    description: string;
}

export const RegionMock: RegionType[] = [
  { 
    id: 1, locationId: 1, region: 'Toshkent', category: 'Furniture & Interior', items: ['Furniture workshop'], district: 'Yunusobod', neighborhoods: ['Yunusobod 1', 'Yunusobod 2'], 
    address: 'Yunusobod, Toshkent, Uzbekistan', latitude: 41.3155, longitude: 69.2645, radius: 3000, description: 'Furniture workshop in Yunusobod',
  },
  {
    id: 2, locationId: 2, region: 'Toshkent', category: 'Furniture & Interior', items: ['Soft furniture'], district: 'Chilonzor', neighborhoods: ['Chilonzor 1', 'Chilonzor 2'],
    address: 'Chilonzor, Toshkent, Uzbekistan', latitude: 41.2701, longitude: 69.209, radius: 3000, description: 'Soft furniture in Chilonzor',
  },
  {
    id: 3, locationId: 3, region: 'Toshkent', category: 'Furniture & Interior', items: ['Hard furniture'], district: 'Mirzo Ulug‘bek', neighborhoods: ['Mirzo Ulug‘bek 1', 'Mirzo Ulug‘bek 2'],
    address: 'Mirzo Ulug‘bek, Toshkent, Uzbekistan', latitude: 41.327, longitude: 69.2805, radius: 3000, description: 'Hard furniture in Mirzo Ulug‘bek',
  },
  {
    id: 4, locationId: 4, region: 'Toshkent', category: 'Furniture & Interior', items: ['Kitchen furniture'], district: 'Olmazor', neighborhoods: ['Olmazor 1', 'Olmazor 2'],
    address: 'Olmazor, Toshkent, Uzbekistan', latitude: 41.312, longitude: 69.2475, radius: 3000, description: 'Kitchen furniture in Olmazor',
  },
  {
    id: 5, locationId: 5, region: 'Toshkent', category: 'Furniture & Interior', items: ['Furniture repair service'], district: 'Yashnobod', neighborhoods: ['Yashnobod 1', 'Yashnobod 2'],
    address: 'Yashnobod, Toshkent, Uzbekistan', latitude: 41.333, longitude: 69.291, radius: 3000, description: 'Furniture repair in Yashnobod',
  },
  {
    id: 6, locationId: 6, region: 'Toshkent', category: 'Home & Construction Services', items: ['Home repair service'], district: 'Sergeli', neighborhoods: ['Sergeli 1', 'Sergeli 2'],
    address: 'Sergeli, Toshkent, Uzbekistan', latitude: 41.2705, longitude: 69.298, radius: 3000, description: 'Home repair service in Sergeli',
  },
  {
    id: 7, locationId: 7, region: 'Toshkent', category: 'Home & Construction Services', items: ['Air conditioner installation service'], district: 'Shayxontohur', neighborhoods: ['Shayxontohur 1', 'Shayxontohur 2'],
    address: 'Shayxontohur, Toshkent, Uzbekistan', latitude: 41.325, longitude: 69.2225, radius: 3000, description: 'AC installation in Shayxontohur',
  },
  {
    id: 8, locationId: 8, region: 'Toshkent', category: 'Home & Construction Services', items: ['Carpentry workshop'], district: 'Mirobod', neighborhoods: ['Mirobod 1', 'Mirobod 2'],
    address: 'Mirobod, Toshkent, Uzbekistan', latitude: 41.322, longitude: 69.225, radius: 3000, description: 'Carpentry workshop in Mirobod',
  },
  {
    id: 9, locationId: 9, region: 'Toshkent', category: 'Home & Construction Services', items: ['Plumbing service'], district: 'Bektemir', neighborhoods: ['Bektemir 1', 'Bektemir 2'],
    address: 'Bektemir, Toshkent, Uzbekistan', latitude: 41.32, longitude: 69.36, radius: 3000, description: 'Plumbing service in Bektemir',
  },
  {
    id: 10, locationId: 110, region: 'Toshkent', category: 'Home & Construction Services', items: ['Electrical repair service'], district: 'Uchtepa', neighborhoods: ['Uchtepa 1', 'Uchtepa 2'],
    address: 'Uchtepa, Toshkent, Uzbekistan', latitude: 41.33, longitude: 69.28, radius: 3000, description: 'Electrical repair in Uchtepa',
  },
  {
    id: 11, locationId: 111, region: 'Toshkent', category: 'Personal Care & Maintenance', items: ['Barbershop'], district: 'Yunusobod', neighborhoods: ['Yunusobod 3', 'Yunusobod 4'],
    address: 'Yunusobod, Toshkent, Uzbekistan', latitude: 41.31, longitude: 69.255, radius: 3000, description: 'Barbershop in Yunusobod',
  },
  {
    id: 12, locationId: 112, region: 'Toshkent', category: 'Personal Care & Maintenance', items: ['Dry cleaning'], district: 'Chilonzor', neighborhoods: ['Chilonzor 3', 'Chilonzor 4'],
    address: 'Chilonzor, Toshkent, Uzbekistan', latitude: 41.269, longitude: 69.21, radius: 3000, description: 'Dry cleaning in Chilonzor',
  },
  {
    id: 13, locationId: 113, region: 'Toshkent', category: 'Automotive Services', items: ['Car repair workshop'], district: 'Mirzo Ulug‘bek', neighborhoods: ['Mirzo Ulug‘bek 3'],
    address: 'Mirzo Ulug‘bek, Toshkent, Uzbekistan', latitude: 41.3305, longitude: 69.282, radius: 3000, description: 'Car repair workshop in Mirzo Ulug‘bek',
  },
  {
    id: 14, locationId: 114, region: 'Toshkent', category: 'Automotive Services', items: ['Auto service center'], district: 'Yashnobod', neighborhoods: ['Yashnobod 3'],
    address: 'Yashnobod, Toshkent, Uzbekistan', latitude: 41.334, longitude: 69.292, radius: 3000, description: 'Auto service center in Yashnobod',
  },
  {
    id: 15, locationId: 115, region: 'Toshkent', category: 'Education & Learning', items: ['Training center'], district: 'Uchtepa', neighborhoods: ['Uchtepa 3'],
    address: 'Uchtepa, Toshkent, Uzbekistan', latitude: 41.332, longitude: 69.281, radius: 3000, description: 'Training center in Uchtepa',
  },
  {
    id: 16, locationId: 116, region: 'Toshkent', category: 'Education & Learning', items: ['Language school'], district: 'Sergeli', neighborhoods: ['Sergeli 3'],
    address: 'Sergeli, Toshkent, Uzbekistan', latitude: 41.271, longitude: 69.299, radius: 3000, description: 'Language school in Sergeli',
  },
  {
    id: 17, locationId: 117, region: 'Toshkent', category: 'Food & Business Places', items: ['Kitchen'], district: 'Shayxontohur', neighborhoods: ['Shayxontohur 3'],
    address: 'Shayxontohur, Toshkent, Uzbekistan', latitude: 41.326, longitude: 69.223, radius: 3000, description: 'Kitchen in Shayxontohur',
  },
  {
    id: 18, locationId: 118, region: 'Toshkent', category: 'Food & Business Places', items: ['Café'], district: 'Mirobod', neighborhoods: ['Mirobod 3'],
    address: 'Mirobod, Toshkent, Uzbekistan', latitude: 41.323, longitude: 69.226, radius: 3000, description: 'Café in Mirobod',
  },
  {
    id: 19, locationId: 119, region: 'Toshkent', category: 'Food & Business Places', items: ['Restaurant'], district: 'Chilonzor', neighborhoods: ['Chilonzor 5'],
    address: 'Chilonzor, Toshkent, Uzbekistan', latitude: 41.2685, longitude: 69.211, radius: 3000, description: 'Restaurant in Chilonzor',
  },
  {
    id: 20, locationId: 220, region: 'Toshkent', category: 'Food & Business Places', items: ['Shop'], district: 'Yunusobod', neighborhoods: ['Yunusobod 5'],
    address: 'Yunusobod, Toshkent, Uzbekistan', latitude: 41.311, longitude: 69.256, radius: 3000, description: 'Shop in Yunusobod',
  },
  {
    id: 21, locationId: 221, region: 'Toshkent', category: 'Food & Business Places', items: ['Mosque'], district: 'Mirzo Ulug‘bek', neighborhoods: ['Mirzo Ulug‘bek 4'],
    address: 'Mirzo Ulug‘bek, Toshkent, Uzbekistan', latitude: 41.331, longitude: 69.283, radius: 3000, description: 'Mosque in Mirzo Ulug‘bek',
  },
  {
    id: 22, locationId: 222, region: 'Andijan', category: 'Furniture & Interior', items: ['Furniture workshop'], district: 'Andijan City', neighborhoods: ['Andijan 1', 'Andijan 2'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.7825, longitude: 72.3464, radius: 3000, description: 'Furniture workshop in Andijan City',
  },
  {
    id: 23, locationId: 223, region: 'Andijan', category: 'Furniture & Interior', items: ['Soft furniture'], district: 'Andijan City', neighborhoods: ['Andijan 3', 'Andijan 4'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.783, longitude: 72.35, radius: 3000, description: 'Soft furniture in Andijan City',
  },
  {
    id: 24, locationId: 224, region: 'Andijan', category: 'Furniture & Interior', items: ['Hard furniture'], district: 'Andijan City', neighborhoods: ['Andijan 5', 'Andijan 6'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.784, longitude: 72.355, radius: 3000, description: 'Hard furniture in Andijan City',
  },
  {
    id: 25, locationId: 225, region: 'Andijan', category: 'Furniture & Interior', items: ['Kitchen furniture'], district: 'Andijan City', neighborhoods: ['Andijan 7', 'Andijan 8'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.785, longitude: 72.358, radius: 3000, description: 'Kitchen furniture in Andijan City',
  },
  {
    id: 26, locationId: 226, region: 'Andijan', category: 'Furniture & Interior', items: ['Furniture repair service'], district: 'Andijan City', neighborhoods: ['Andijan 9', 'Andijan 10'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.786, longitude: 72.36, radius: 3000, description: 'Furniture repair in Andijan City',
  },
  {
    id: 27, locationId: 227, region: 'Andijan', category: 'Home & Construction Services', items: ['Home repair service'], district: 'Andijan City', neighborhoods: ['Andijan 11', 'Andijan 12'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.787, longitude: 72.362, radius: 3000, description: 'Home repair service in Andijan City',
  },
  {
    id: 28, locationId: 228, region: 'Andijan', category: 'Home & Construction Services', items: ['Air conditioner installation service'], district: 'Andijan City', neighborhoods: ['Andijan 13', 'Andijan 14'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.788, longitude: 72.365, radius: 3000, description: 'AC installation in Andijan City',
  },
  {
    id: 29, locationId: 229, region: 'Andijan', category: 'Home & Construction Services', items: ['Carpentry workshop'], district: 'Andijan City', neighborhoods: ['Andijan 15', 'Andijan 16'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.789, longitude: 72.368, radius: 3000, description: 'Carpentry workshop in Andijan City',
  },
  {
    id: 30, locationId: 330, region: 'Andijan', category: 'Home & Construction Services', items: ['Plumbing service'], district: 'Andijan City', neighborhoods: ['Andijan 17', 'Andijan 18'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.79, longitude: 72.37, radius: 3000, description: 'Plumbing service in Andijan City',
  },
  {
    id: 31, locationId: 331, region: 'Andijan', category: 'Home & Construction Services', items: ['Electrical repair service'], district: 'Andijan City', neighborhoods: ['Andijan 19', 'Andijan 20'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.791, longitude: 72.372, radius: 3000, description: 'Electrical repair in Andijan City',
  },
  {
    id: 32, locationId: 332, region: 'Andijan', category: 'Personal Care & Maintenance', items: ['Barbershop'], district: 'Andijan City', neighborhoods: ['Andijan 21', 'Andijan 22'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.792, longitude: 72.374, radius: 3000, description: 'Barbershop in Andijan City',
  },
  {
    id: 33, locationId: 333, region: 'Andijan', category: 'Personal Care & Maintenance', items: ['Dry cleaning'], district: 'Andijan City', neighborhoods: ['Andijan 23', 'Andijan 24'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.793, longitude: 72.376, radius: 3000, description: 'Dry cleaning in Andijan City',
  },
  {
    id: 34, locationId: 334, region: 'Andijan', category: 'Automotive Services', items: ['Car repair workshop'], district: 'Andijan City', neighborhoods: ['Andijan 25'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.794, longitude: 72.378, radius: 3000, description: 'Car repair workshop in Andijan City',
  },
  {
    id: 35, locationId: 335, region: 'Andijan', category: 'Automotive Services', items: ['Auto service center'], district: 'Andijan City', neighborhoods: ['Andijan 26'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.795, longitude: 72.38, radius: 3000, description: 'Auto service center in Andijan City',
  },
  {
    id: 36, locationId: 336, region: 'Andijan', category: 'Education & Learning', items: ['Training center'], district: 'Andijan City', neighborhoods: ['Andijan 27'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.796, longitude: 72.382, radius: 3000, description: 'Training center in Andijan City',
  },
  {
    id: 37, locationId: 337, region: 'Andijan', category: 'Education & Learning', items: ['Language school'], district: 'Andijan City', neighborhoods: ['Andijan 28'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.797, longitude: 72.384, radius: 3000, description: 'Language school in Andijan City',
  },
  {
    id: 38, locationId: 338, region: 'Andijan', category: 'Food & Business Places', items: ['Kitchen'], district: 'Andijan City', neighborhoods: ['Andijan 29'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.798, longitude: 72.386, radius: 3000, description: 'Kitchen in Andijan City',
  },
  {
    id: 39, locationId: 339, region: 'Andijan', category: 'Food & Business Places', items: ['Café'], district: 'Andijan City', neighborhoods: ['Andijan 30'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.799, longitude: 72.388, radius: 3000, description: 'Café in Andijan City',
  },
  {
    id: 40, locationId: 440, region: 'Andijan', category: 'Food & Business Places', items: ['Restaurant'], district: 'Andijan City', neighborhoods: ['Andijan 31'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.8, longitude: 72.39, radius: 3000, description: 'Restaurant in Andijan City',
  },
  {
    id: 41, locationId: 441, region: 'Andijan', category: 'Food & Business Places', items: ['Shop'], district: 'Andijan City', neighborhoods: ['Andijan 32'],
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.801, longitude: 72.392, radius: 3000, description: 'Shop in Andijan City',
  },
  {
    id: 42, locationId: 442, region: 'Andijan', category: 'Food & Business Places', items: ['Mosque'], district: 'Andijan City', neighborhoods: ['Andijan 33'], 
    address: 'Andijan City, Andijan, Uzbekistan', latitude: 40.802, longitude: 72.394, radius: 3000, description: 'Mosque in Andijan City',
  },
  {
    id:64, locationId: 664, region:"Samarqand", category:"Furniture & Interior", items:["Furniture workshop"], district:"Samarqand City", neighborhoods:["Samarqand 1","Samarqand 2"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6542, longitude:66.9597, radius:3000, description:"Furniture workshop in Samarqand City"
  },
  {
    id:65, locationId: 665, region:"Samarqand", category:"Furniture & Interior", items:["Soft furniture"], district:"Samarqand City", neighborhoods:["Samarqand 3","Samarqand 4"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6550, longitude:66.9610, radius:3000, description:"Soft furniture in Samarqand City"
  },
  {
    id:66, locationId: 666, region:"Samarqand", category:"Furniture & Interior", items:["Hard furniture"], district:"Samarqand City", neighborhoods:["Samarqand 5","Samarqand 6"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6560, longitude:66.9630, radius:3000, description:"Hard furniture in Samarqand City"
  },
  {
    id:67, locationId: 667, region:"Samarqand", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Samarqand City", neighborhoods:["Samarqand 7","Samarqand 8"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6570, longitude:66.9650, radius:3000, description:"Kitchen furniture in Samarqand City"
  },
  {
    id:68, locationId: 668, region:"Samarqand", category:"Furniture & Interior", items:["Furniture repair service"], district:"Samarqand City", neighborhoods:["Samarqand 9","Samarqand 10"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6580, longitude:66.9670, radius:3000, description:"Furniture repair in Samarqand City"
  },
  {
    id:69, locationId: 669, region:"Samarqand", category:"Home & Construction Services", items:["Home repair service"], district:"Samarqand City", neighborhoods:["Samarqand 11","Samarqand 12"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6590, longitude:66.9690, radius:3000, description:"Home repair service in Samarqand City"
  },
  {
    id:70, locationId: 770, region:"Samarqand", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Samarqand City", neighborhoods:["Samarqand 13","Samarqand 14"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6600, longitude:66.9710, radius:3000, description:"AC installation in Samarqand City"
  },
  {
    id:71, locationId: 771, region:"Samarqand", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Samarqand City", neighborhoods:["Samarqand 15","Samarqand 16"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6610, longitude:66.9730, radius:3000, description:"Carpentry workshop in Samarqand City"
  },
  {
    id:72, locationId: 772, region:"Samarqand", category:"Home & Construction Services", items:["Plumbing service"], district:"Samarqand City", neighborhoods:["Samarqand 17","Samarqand 18"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6620, longitude:66.9750, radius:3000, description:"Plumbing service in Samarqand City"
  },
  {
    id:73, locationId: 773, region:"Samarqand", category:"Home & Construction Services", items:["Electrical repair service"], district:"Samarqand City", neighborhoods:["Samarqand 19","Samarqand 20"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6630, longitude:66.9770, radius:3000, description:"Electrical repair in Samarqand City"
  },
  {
    id:74, locationId: 774, region:"Samarqand", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Samarqand City", neighborhoods:["Samarqand 21","Samarqand 22"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6640, longitude:66.9790, radius:3000, description:"Barbershop in Samarqand City"
  },
  {
    id:75, locationId: 775, region:"Samarqand", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Samarqand City", neighborhoods:["Samarqand 23","Samarqand 24"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6650, longitude:66.9810, radius:3000, description:"Dry cleaning in Samarqand City"
  },
  {
    id:76, locationId: 776, region:"Samarqand", category:"Automotive Services", items:["Car repair workshop"], district:"Samarqand City", neighborhoods:["Samarqand 25"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6660, longitude:66.9830, radius:3000, description:"Car repair workshop in Samarqand City"
  },
  {
    id:77, locationId: 777, region:"Samarqand", category:"Automotive Services", items:["Auto service center"], district:"Samarqand City", neighborhoods:["Samarqand 26"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6670, longitude:66.9850, radius:3000, description:"Auto service center in Samarqand City"
  },
  {
    id:78, locationId: 778, region:"Samarqand", category:"Education & Learning", items:["Training center"], district:"Samarqand City", neighborhoods:["Samarqand 27"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6680, longitude:66.9870, radius:3000, description:"Training center in Samarqand City"
  },
  {
    id:79, locationId: 779, region:"Samarqand", category:"Education & Learning", items:["Language school"], district:"Samarqand City", neighborhoods:["Samarqand 28"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6690, longitude:66.9890, radius:3000, description:"Language school in Samarqand City"
  },
  {
    id:80, locationId: 880, region:"Samarqand", category:"Food & Business Places", items:["Kitchen"], district:"Samarqand City", neighborhoods:["Samarqand 29"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6700, longitude:66.9910, radius:3000, description:"Kitchen in Samarqand City"
  },
  {
    id:81, locationId: 881, region:"Samarqand", category:"Food & Business Places", items:["Café"], district:"Samarqand City", neighborhoods:["Samarqand 30"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6710, longitude:66.9930, radius:3000, description:"Café in Samarqand City"
  },
  {
    id:82, locationId: 882, region:"Samarqand", category:"Food & Business Places", items:["Restaurant"], district:"Samarqand City", neighborhoods:["Samarqand 31"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6720, longitude:66.9950, radius:3000, description:"Restaurant in Samarqand City"
  },
  {
    id:83, locationId: 883, region:"Samarqand", category:"Food & Business Places", items:["Shop"], district:"Samarqand City", neighborhoods:["Samarqand 32"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6730, longitude:66.9970, radius:3000, description:"Shop in Samarqand City"
  },
  {
    id:84, locationId: 884, region:"Samarqand", category:"Food & Business Places", items:["Mosque"], district:"Samarqand City", neighborhoods:["Samarqand 33"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6740, longitude:66.9990, radius:3000, description:"Mosque in Samarqand City"
  },
  {
    id:85, locationId: 885, region:"Samarqand", category:"Food & Business Places", items:["Mosque"], district:"Samarqand City", neighborhoods:["Samarqand 34"], 
    address:"Samarqand City, Samarqand, Uzbekistan", latitude:39.6750, longitude:67.0010, radius:3000, description:"Mosque in Samarqand City"
  },
  {
    id:86, locationId: 886, region:"Buxoro", category:"Furniture & Interior", items:["Furniture workshop"], district:"Buxoro City", neighborhoods:["Buxoro 1","Buxoro 2"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7740, longitude:64.4280, radius:3000, description:"Furniture workshop in Buxoro City"
  },
  {
    id:87, locationId: 887, region:"Buxoro", category:"Furniture & Interior", items:["Soft furniture"], district:"Buxoro City", neighborhoods:["Buxoro 3","Buxoro 4"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7750, longitude:64.4300, radius:3000, description:"Soft furniture in Buxoro City"
  },
  {
    id:88, locationId: 888, region:"Buxoro", category:"Furniture & Interior", items:["Hard furniture"], district:"Buxoro City", neighborhoods:["Buxoro 5","Buxoro 6"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7760, longitude:64.4320, radius:3000, description:"Hard furniture in Buxoro City"
  },
  {
    id:89, locationId: 889, region:"Buxoro", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Buxoro City", neighborhoods:["Buxoro 7","Buxoro 8"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7770, longitude:64.4340, radius:3000, description:"Kitchen furniture in Buxoro City"
  },
  {
    id:90, locationId: 990, region:"Buxoro", category:"Furniture & Interior", items:["Furniture repair service"], district:"Buxoro City", neighborhoods:["Buxoro 9","Buxoro 10"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7780, longitude:64.4360, radius:3000, description:"Furniture repair in Buxoro City"
  },
  {
    id:91, locationId: 991, region:"Buxoro", category:"Home & Construction Services", items:["Home repair service"], district:"Buxoro City", neighborhoods:["Buxoro 11","Buxoro 12"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7790, longitude:64.4380, radius:3000, description:"Home repair service in Buxoro City"
  },
  {
    id:92, locationId: 992, region:"Buxoro", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Buxoro City", neighborhoods:["Buxoro 13","Buxoro 14"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7800, longitude:64.4400, radius:3000, description:"AC installation in Buxoro City"
  },
  {
    id:93, locationId: 993, region:"Buxoro", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Buxoro City", neighborhoods:["Buxoro 15","Buxoro 16"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7810, longitude:64.4420, radius:3000, description:"Carpentry workshop in Buxoro City"
  },
  {
    id:94, locationId: 994, region:"Buxoro", category:"Home & Construction Services", items:["Plumbing service"], district:"Buxoro City", neighborhoods:["Buxoro 17","Buxoro 18"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7820, longitude:64.4440, radius:3000, description:"Plumbing service in Buxoro City"
  },
  {
    id:95, locationId: 995, region:"Buxoro", category:"Home & Construction Services", items:["Electrical repair service"], district:"Buxoro City", neighborhoods:["Buxoro 19","Buxoro 20"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7830, longitude:64.4460, radius:3000, description:"Electrical repair in Buxoro City"
  },
  {
    id:96, locationId: 996, region:"Buxoro", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Buxoro City", neighborhoods:["Buxoro 21","Buxoro 22"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7840, longitude:64.4480, radius:3000, description:"Barbershop in Buxoro City"
  },
  {
    id:97, locationId: 997, region:"Buxoro", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Buxoro City", neighborhoods:["Buxoro 23","Buxoro 24"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7850, longitude:64.4500, radius:3000, description:"Dry cleaning in Buxoro City"
  },
  {
    id:98, locationId: 998, region:"Buxoro", category:"Automotive Services", items:["Car repair workshop"], district:"Buxoro City", neighborhoods:["Buxoro 25"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7860, longitude:64.4520, radius:3000, description:"Car repair workshop in Buxoro City"
  },
  {
    id:99, locationId: 999, region:"Buxoro", category:"Automotive Services", items:["Auto service center"], district:"Buxoro City", neighborhoods:["Buxoro 26"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7870, longitude:64.4540, radius:3000, description:"Auto service center in Buxoro City"
  },
  {
    id:100, locationId: 10100, region:"Buxoro", category:"Education & Learning", items:["Training center"], district:"Buxoro City", neighborhoods:["Buxoro 27"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7880, longitude:64.4560, radius:3000, description:"Training center in Buxoro City"
  },
  {
    id:101, locationId: 10101, region:"Buxoro", category:"Education & Learning", items:["Language school"], district:"Buxoro City", neighborhoods:["Buxoro 28"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7890, longitude:64.4580, radius:3000, description:"Language school in Buxoro City"
  },
  {
    id:102, locationId: 10102, region:"Buxoro", category:"Food & Business Places", items:["Kitchen"], district:"Buxoro City", neighborhoods:["Buxoro 29"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7900, longitude:64.4600, radius:3000, description:"Kitchen in Buxoro City"
  },
  {
    id:103, locationId: 10103, region:"Buxoro", category:"Food & Business Places", items:["Café"], district:"Buxoro City", neighborhoods:["Buxoro 30"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7910, longitude:64.4620, radius:3000, description:"Café in Buxoro City"
  },
  {
    id:104, locationId: 10104, region:"Buxoro", category:"Food & Business Places", items:["Restaurant"], district:"Buxoro City", neighborhoods:["Buxoro 31"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7920, longitude:64.4640, radius:3000, description:"Restaurant in Buxoro City"
  },
  {
    id:105, locationId: 10105, region:"Buxoro", category:"Food & Business Places", items:["Shop"], district:"Buxoro City", neighborhoods:["Buxoro 32"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7930, longitude:64.4660, radius:3000, description:"Shop in Buxoro City"
  },
  {
    id:106, locationId: 10106, region:"Buxoro", category:"Food & Business Places", items:["Mosque"], district:"Buxoro City", neighborhoods:["Buxoro 33"], 
    address:"Buxoro City, Buxoro, Uzbekistan", latitude:39.7940, longitude:64.4680, radius:3000, description:"Mosque in Buxoro City"
  },
  {
    id:107, locationId: 10107, region:"Farg‘ona", category:"Furniture & Interior", items:["Furniture workshop"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 1","Farg‘ona 2"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3777, longitude:71.7847, radius:3000, description:"Furniture workshop in Farg‘ona City"
  },
  {
    id:108, locationId: 10108, region:"Farg‘ona", category:"Furniture & Interior", items:["Soft furniture"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 3","Farg‘ona 4"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3785, longitude:71.7860, radius:3000, description:"Soft furniture in Farg‘ona City"
  },
  {
    id:109, locationId: 10109, region:"Farg‘ona", category:"Furniture & Interior", items:["Hard furniture"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 5","Farg‘ona 6"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3793, longitude:71.7875, radius:3000, description:"Hard furniture in Farg‘ona City"
  },
  {
    id:110, locationId: 11110, region:"Farg‘ona", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 7","Farg‘ona 8"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3800, longitude:71.7890, radius:3000, description:"Kitchen furniture in Farg‘ona City"
  },
  {
    id:111, locationId: 11111, region:"Farg‘ona", category:"Furniture & Interior", items:["Furniture repair service"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 9","Farg‘ona 10"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3807, longitude:71.7905, radius:3000, description:"Furniture repair in Farg‘ona City"
  },
  {
    id:112, locationId: 11112, region:"Farg‘ona", category:"Home & Construction Services", items:["Home repair service"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 11","Farg‘ona 12"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3815, longitude:71.7920, radius:3000, description:"Home repair service in Farg‘ona City"
  },
  {
    id:113, locationId: 11113, region:"Farg‘ona", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 13","Farg‘ona 14"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3822, longitude:71.7935, radius:3000, description:"AC installation in Farg‘ona City"
  },
  {
    id:114, locationId: 11114, region:"Farg‘ona", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 15","Farg‘ona 16"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3830, longitude:71.7950, radius:3000, description:"Carpentry workshop in Farg‘ona City"
  },
  {
    id:115, locationId: 11115, region:"Farg‘ona", category:"Home & Construction Services", items:["Plumbing service"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 17","Farg‘ona 18"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3837, longitude:71.7965, radius:3000, description:"Plumbing service in Farg‘ona City"
  },
  {
    id:116, locationId: 11116, region:"Farg‘ona", category:"Home & Construction Services", items:["Electrical repair service"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 19","Farg‘ona 20"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3845, longitude:71.7980, radius:3000, description:"Electrical repair in Farg‘ona City"
  },
  {
    id:117, locationId: 11117, region:"Farg‘ona", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 21","Farg‘ona 22"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3852, longitude:71.7995, radius:3000, description:"Barbershop in Farg‘ona City"
  },
  {
    id:118, locationId: 11118, region:"Farg‘ona", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 23","Farg‘ona 24"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3860, longitude:71.8010, radius:3000, description:"Dry cleaning in Farg‘ona City"
  },
  {
    id:119, locationId: 11119, region:"Farg‘ona", category:"Automotive Services", items:["Car repair workshop"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 25"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3867, longitude:71.8025, radius:3000, description:"Car repair workshop in Farg‘ona City"
  },
  {
    id:120, locationId: 12120, region:"Farg‘ona", category:"Automotive Services", items:["Auto service center"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 26"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3875, longitude:71.8040, radius:3000, description:"Auto service center in Farg‘ona City"
  },
  {
    id:121, locationId: 12121, region:"Farg‘ona", category:"Education & Learning", items:["Training center"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 27"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3882, longitude:71.8055, radius:3000, description:"Training center in Farg‘ona City"
  },
  {
    id:122, locationId: 12122, region:"Farg‘ona", category:"Education & Learning", items:["Language school"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 28"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3890, longitude:71.8070, radius:3000, description:"Language school in Farg‘ona City"
  },
  {
    id:123, locationId: 12123, region:"Farg‘ona", category:"Food & Business Places", items:["Kitchen"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 29"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3897, longitude:71.8085, radius:3000, description:"Kitchen in Farg‘ona City"
  },
  {
    id:124, locationId: 12124, region:"Farg‘ona", category:"Food & Business Places", items:["Café"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 30"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3905, longitude:71.8100, radius:3000, description:"Café in Farg‘ona City"
  },
  {
    id:125, locationId: 12125, region:"Farg‘ona", category:"Food & Business Places", items:["Restaurant"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 31"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3912, longitude:71.8115, radius:3000, description:"Restaurant in Farg‘ona City"
  },
  {
    id:126, locationId: 12126, region:"Farg‘ona", category:"Food & Business Places", items:["Shop"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 32"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3920, longitude:71.8130, radius:3000, description:"Shop in Farg‘ona City"
  },
  {
    id:127, locationId: 12127, region:"Farg‘ona", category:"Food & Business Places", items:["Mosque"], district:"Farg‘ona City", neighborhoods:["Farg‘ona 33"], 
    address:"Farg‘ona City, Farg‘ona, Uzbekistan", latitude:40.3927, longitude:71.8145, radius:3000, description:"Mosque in Farg‘ona City"
  },
  {
    id:128, locationId: 12128, region:"Namangan", category:"Furniture & Interior", items:["Furniture workshop"], district:"Namangan City", neighborhoods:["Namangan 1","Namangan 2"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0000, longitude:71.6700, radius:3000, description:"Furniture workshop in Namangan City"
  },
  {
    id:129, locationId: 12129, region:"Namangan", category:"Furniture & Interior", items:["Soft furniture"], district:"Namangan City", neighborhoods:["Namangan 3","Namangan 4"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0010, longitude:71.6715, radius:3000, description:"Soft furniture in Namangan City"
  },
  {
    id:130, locationId: 13130, region:"Namangan", category:"Furniture & Interior", items:["Hard furniture"], district:"Namangan City", neighborhoods:["Namangan 5","Namangan 6"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0020, longitude:71.6730, radius:3000, description:"Hard furniture in Namangan City"
  },
  {
    id:131, locationId: 13131, region:"Namangan", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Namangan City", neighborhoods:["Namangan 7","Namangan 8"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0030, longitude:71.6745, radius:3000, description:"Kitchen furniture in Namangan City"
  },
  {
    id:132, locationId: 13132, region:"Namangan", category:"Furniture & Interior", items:["Furniture repair service"], district:"Namangan City", neighborhoods:["Namangan 9","Namangan 10"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0040, longitude:71.6760, radius:3000, description:"Furniture repair in Namangan City"
  },
  {
    id:133, locationId: 13133, region:"Namangan", category:"Home & Construction Services", items:["Home repair service"], district:"Namangan City", neighborhoods:["Namangan 11","Namangan 12"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0050, longitude:71.6775, radius:3000, description:"Home repair service in Namangan City"
  },
  {
    id:134, locationId: 13134, region:"Namangan", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Namangan City", neighborhoods:["Namangan 13","Namangan 14"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0060, longitude:71.6790, radius:3000, description:"AC installation in Namangan City"
  },
  {
    id:135, locationId: 13135, region:"Namangan", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Namangan City", neighborhoods:["Namangan 15","Namangan 16"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0070, longitude:71.6805, radius:3000, description:"Carpentry workshop in Namangan City"
  },
  {
    id:136, locationId: 13136, region:"Namangan", category:"Home & Construction Services", items:["Plumbing service"], district:"Namangan City", neighborhoods:["Namangan 17","Namangan 18"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0080, longitude:71.6820, radius:3000, description:"Plumbing service in Namangan City"
  },
  {
    id:137, locationId: 13137, region:"Namangan", category:"Home & Construction Services", items:["Electrical repair service"], district:"Namangan City", neighborhoods:["Namangan 19","Namangan 20"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0090, longitude:71.6835, radius:3000, description:"Electrical repair in Namangan City"
  },
  {
    id:138, locationId: 13138, region:"Namangan", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Namangan City", neighborhoods:["Namangan 21","Namangan 22"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0100, longitude:71.6850, radius:3000, description:"Barbershop in Namangan City"
  },
  {
    id:139, locationId: 13139, region:"Namangan", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Namangan City", neighborhoods:["Namangan 23","Namangan 24"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0110, longitude:71.6865, radius:3000, description:"Dry cleaning in Namangan City"
  },
  {
    id:140, locationId: 14140, region:"Namangan", category:"Automotive Services", items:["Car repair workshop"], district:"Namangan City", neighborhoods:["Namangan 25"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0120, longitude:71.6880, radius:3000, description:"Car repair workshop in Namangan City"
  },
  {
    id:141, locationId: 14141, region:"Namangan", category:"Automotive Services", items:["Auto service center"], district:"Namangan City", neighborhoods:["Namangan 26"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0130, longitude:71.6895, radius:3000, description:"Auto service center in Namangan City"
  },
  {
    id:142, locationId: 14142, region:"Namangan", category:"Education & Learning", items:["Training center"], district:"Namangan City", neighborhoods:["Namangan 27"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0140, longitude:71.6910, radius:3000, description:"Training center in Namangan City"
  },
  {
    id:143, locationId: 14143, region:"Namangan", category:"Education & Learning", items:["Language school"], district:"Namangan City", neighborhoods:["Namangan 28"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0150, longitude:71.6925, radius:3000, description:"Language school in Namangan City"
  },
  {
    id:144, locationId: 14144, region:"Namangan", category:"Food & Business Places", items:["Kitchen"], district:"Namangan City", neighborhoods:["Namangan 29"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0160, longitude:71.6940, radius:3000, description:"Kitchen in Namangan City"
  },
  {
    id:145, locationId: 14145, region:"Namangan", category:"Food & Business Places", items:["Café"], district:"Namangan City", neighborhoods:["Namangan 30"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0170, longitude:71.6955, radius:3000, description:"Café in Namangan City"
  },
  {
    id:146, locationId: 14146, region:"Namangan", category:"Food & Business Places", items:["Restaurant"], district:"Namangan City", neighborhoods:["Namangan 31"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0180, longitude:71.6970, radius:3000, description:"Restaurant in Namangan City"
  },
  {
    id:147, locationId: 14147, region:"Namangan", category:"Food & Business Places", items:["Shop"], district:"Namangan City", neighborhoods:["Namangan 32"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0190, longitude:71.6985, radius:3000, description:"Shop in Namangan City"
  },
  {
    id:148, locationId: 14148, region:"Namangan", category:"Food & Business Places", items:["Mosque"], district:"Namangan City", neighborhoods:["Namangan 33"], 
    address:"Namangan City, Namangan, Uzbekistan", latitude:41.0200, longitude:71.7000, radius:3000, description:"Mosque in Namangan City"
  },
  {
    id:149, locationId: 14149, region:"Navoiy", category:"Furniture & Interior", items:["Furniture workshop"], district:"Navoiy City", neighborhoods:["Navoiy 1","Navoiy 2"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1000, longitude:65.3700, radius:3000, description:"Furniture workshop in Navoiy City"
  },
  {
    id:150, locationId: 15150, region:"Navoiy", category:"Furniture & Interior", items:["Soft furniture"], district:"Navoiy City", neighborhoods:["Navoiy 3","Navoiy 4"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1010, longitude:65.3715, radius:3000, description:"Soft furniture in Navoiy City"
  },
  {
    id:151, locationId: 15151, region:"Navoiy", category:"Furniture & Interior", items:["Hard furniture"], district:"Navoiy City", neighborhoods:["Navoiy 5","Navoiy 6"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1020, longitude:65.3730, radius:3000, description:"Hard furniture in Navoiy City"
  },
  {
    id:152, locationId: 15152, region:"Navoiy", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Navoiy City", neighborhoods:["Navoiy 7","Navoiy 8"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1030, longitude:65.3745, radius:3000, description:"Kitchen furniture in Navoiy City"
  },
  {
    id:153, locationId: 15153, region:"Navoiy", category:"Furniture & Interior", items:["Furniture repair service"], district:"Navoiy City", neighborhoods:["Navoiy 9","Navoiy 10"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1040, longitude:65.3760, radius:3000, description:"Furniture repair in Navoiy City"
  },
  {
    id:154, locationId: 15154, region:"Navoiy", category:"Home & Construction Services", items:["Home repair service"], district:"Navoiy City", neighborhoods:["Navoiy 11","Navoiy 12"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1050, longitude:65.3775, radius:3000, description:"Home repair service in Navoiy City"
  },
  {
    id:155, locationId: 15155, region:"Navoiy", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Navoiy City", neighborhoods:["Navoiy 13","Navoiy 14"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1060, longitude:65.3790, radius:3000, description:"AC installation in Navoiy City"
  },
  {
    id:156, locationId: 15156, region:"Navoiy", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Navoiy City", neighborhoods:["Navoiy 15","Navoiy 16"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1070, longitude:65.3805, radius:3000, description:"Carpentry workshop in Navoiy City"
  },
  {
    id:157, locationId: 15157, region:"Navoiy", category:"Home & Construction Services", items:["Plumbing service"], district:"Navoiy City", neighborhoods:["Navoiy 17","Navoiy 18"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1080, longitude:65.3820, radius:3000, description:"Plumbing service in Navoiy City"
  },
  {
    id:158, locationId: 15158, region:"Navoiy", category:"Home & Construction Services", items:["Electrical repair service"], district:"Navoiy City", neighborhoods:["Navoiy 19","Navoiy 20"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1090, longitude:65.3835, radius:3000, description:"Electrical repair in Navoiy City"
  },
  {
    id:159, locationId: 15159, region:"Navoiy", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Navoiy City", neighborhoods:["Navoiy 21","Navoiy 22"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1100, longitude:65.3850, radius:3000, description:"Barbershop in Navoiy City"
  },
  {
    id:160, locationId: 16160, region:"Navoiy", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Navoiy City", neighborhoods:["Navoiy 23","Navoiy 24"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1110, longitude:65.3865, radius:3000, description:"Dry cleaning in Navoiy City"
  },
  {
    id:161, locationId: 16161, region:"Navoiy", category:"Automotive Services", items:["Car repair workshop"], district:"Navoiy City", neighborhoods:["Navoiy 25"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1120, longitude:65.3880, radius:3000, description:"Car repair workshop in Navoiy City"
  },
  {
    id:162, locationId: 16162, region:"Navoiy", category:"Automotive Services", items:["Auto service center"], district:"Navoiy City", neighborhoods:["Navoiy 26"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1130, longitude:65.3895, radius:3000, description:"Auto service center in Navoiy City"
  },
  {
    id:163, locationId: 16163, region:"Navoiy", category:"Education & Learning", items:["Training center"], district:"Navoiy City", neighborhoods:["Navoiy 27"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1140, longitude:65.3910, radius:3000, description:"Training center in Navoiy City"
  },
  {
    id:164, locationId: 16164, region:"Navoiy", category:"Education & Learning", items:["Language school"], district:"Navoiy City", neighborhoods:["Navoiy 28"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1150, longitude:65.3925, radius:3000, description:"Language school in Navoiy City"
  },
  {
    id:165, locationId: 16165, region:"Navoiy", category:"Food & Business Places", items:["Kitchen"], district:"Navoiy City", neighborhoods:["Navoiy 29"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1160, longitude:65.3940, radius:3000, description:"Kitchen in Navoiy City"
  },
  {
    id:166, locationId: 16166, region:"Navoiy", category:"Food & Business Places", items:["Café"], district:"Navoiy City", neighborhoods:["Navoiy 30"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1170, longitude:65.3955, radius:3000, description:"Café in Navoiy City"
  },
  {
    id:167, locationId: 16167, region:"Navoiy", category:"Food & Business Places", items:["Restaurant"], district:"Navoiy City", neighborhoods:["Navoiy 31"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1180, longitude:65.3970, radius:3000, description:"Restaurant in Navoiy City"
  },
  {
    id:168, locationId: 16168, region:"Navoiy", category:"Food & Business Places", items:["Shop"], district:"Navoiy City", neighborhoods:["Navoiy 32"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1190, longitude:65.3985, radius:3000, description:"Shop in Navoiy City"
  },
  {
    id:169, locationId: 16169, region:"Navoiy", category:"Food & Business Places", items:["Mosque"], district:"Navoiy City", neighborhoods:["Navoiy 33"], 
    address:"Navoiy City, Navoiy, Uzbekistan", latitude:40.1200, longitude:65.4000, radius:3000, description:"Mosque in Navoiy City"
  },
  {
    id:170, locationId: 17170, region:"Surxondaryo", category:"Furniture & Interior", items:["Furniture workshop"], district:"Termiz", neighborhoods:["Termiz 1","Termiz 2"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2750, longitude:67.2800, radius:3000, description:"Furniture workshop in Termiz"
  },
  {
    id:171, locationId: 17171, region:"Surxondaryo", category:"Furniture & Interior", items:["Soft furniture"], district:"Termiz", neighborhoods:["Termiz 3","Termiz 4"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2760, longitude:67.2815, radius:3000, description:"Soft furniture in Termiz"
  },
  {
    id:172, locationId: 17172, region:"Surxondaryo", category:"Furniture & Interior", items:["Hard furniture"], district:"Termiz", neighborhoods:["Termiz 5","Termiz 6"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2770, longitude:67.2830, radius:3000, description:"Hard furniture in Termiz"
  },
  {
    id:173, locationId: 17173, region:"Surxondaryo", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Termiz", neighborhoods:["Termiz 7","Termiz 8"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2780, longitude:67.2845, radius:3000, description:"Kitchen furniture in Termiz"
  },
  {
    id:174, locationId: 17174, region:"Surxondaryo", category:"Furniture & Interior", items:["Furniture repair service"], district:"Termiz", neighborhoods:["Termiz 9","Termiz 10"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2790, longitude:67.2860, radius:3000, description:"Furniture repair in Termiz"
  },
  {
    id:175, locationId: 17175, region:"Surxondaryo", category:"Home & Construction Services", items:["Home repair service"], district:"Termiz", neighborhoods:["Termiz 11","Termiz 12"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2800, longitude:67.2875, radius:3000, description:"Home repair service in Termiz"
  },
  {
    id:176, locationId: 17176, region:"Surxondaryo", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Termiz", neighborhoods:["Termiz 13","Termiz 14"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2810, longitude:67.2890, radius:3000, description:"AC installation in Termiz"
  },
  {
    id:177, locationId: 17177, region:"Surxondaryo", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Termiz", neighborhoods:["Termiz 15","Termiz 16"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2820, longitude:67.2905, radius:3000, description:"Carpentry workshop in Termiz"
  },
  {
    id:178, locationId: 17178, region:"Surxondaryo", category:"Home & Construction Services", items:["Plumbing service"], district:"Termiz", neighborhoods:["Termiz 17","Termiz 18"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2830, longitude:67.2920, radius:3000, description:"Plumbing service in Termiz"
  },
  {
    id:179, locationId: 17179, region:"Surxondaryo", category:"Home & Construction Services", items:["Electrical repair service"], district:"Termiz", neighborhoods:["Termiz 19","Termiz 20"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2840, longitude:67.2935, radius:3000, description:"Electrical repair in Termiz"
  },
  {
    id:180, locationId: 18180, region:"Surxondaryo", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Termiz", neighborhoods:["Termiz 21","Termiz 22"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2850, longitude:67.2950, radius:3000, description:"Barbershop in Termiz"
  },
  {
    id:181, locationId: 18181, region:"Surxondaryo", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Termiz", neighborhoods:["Termiz 23","Termiz 24"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2860, longitude:67.2965, radius:3000, description:"Dry cleaning in Termiz"
  },
  {
    id:182, locationId: 18182, region:"Surxondaryo", category:"Automotive Services", items:["Car repair workshop"], district:"Termiz", neighborhoods:["Termiz 25"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2870, longitude:67.2980, radius:3000, description:"Car repair workshop in Termiz"
  },
  {
    id:183, locationId: 18183, region:"Surxondaryo", category:"Automotive Services", items:["Auto service center"], district:"Termiz", neighborhoods:["Termiz 26"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2880, longitude:67.2995, radius:3000, description:"Auto service center in Termiz"
  },
  {
    id:184, locationId: 18184, region:"Surxondaryo", category:"Education & Learning", items:["Training center"], district:"Termiz", neighborhoods:["Termiz 27"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2890, longitude:67.3010, radius:3000, description:"Training center in Termiz"
  },
  {
    id:185, locationId: 18185, region:"Surxondaryo", category:"Education & Learning", items:["Language school"], district:"Termiz", neighborhoods:["Termiz 28"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2900, longitude:67.3025, radius:3000, description:"Language school in Termiz"
  },
  {
    id:186, locationId: 18186, region:"Surxondaryo", category:"Food & Business Places", items:["Kitchen"], district:"Termiz", neighborhoods:["Termiz 29"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2910, longitude:67.3040, radius:3000, description:"Kitchen in Termiz"
  },
  {
    id:187, locationId: 18187, region:"Surxondaryo", category:"Food & Business Places", items:["Café"], district:"Termiz", neighborhoods:["Termiz 30"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2920, longitude:67.3055, radius:3000, description:"Café in Termiz"
  },
  {
    id:188, locationId: 18188, region:"Surxondaryo", category:"Food & Business Places", items:["Restaurant"], district:"Termiz", neighborhoods:["Termiz 31"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2930, longitude:67.3070, radius:3000, description:"Restaurant in Termiz"
  },
  {
    id:189, locationId: 18189, region:"Surxondaryo", category:"Food & Business Places", items:["Shop"], district:"Termiz", neighborhoods:["Termiz 32"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2940, longitude:67.3085, radius:3000, description:"Shop in Termiz"
  },
  {
    id:190, locationId: 19190, region:"Surxondaryo", category:"Food & Business Places", items:["Mosque"], district:"Termiz", neighborhoods:["Termiz 33"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2950, longitude:67.3100, radius:3000, description:"Mosque in Termiz"
  },
  {
    id:191, locationId: 19191, region:"Surxondaryo", category:"Food & Business Places", items:["Bakery"], district:"Termiz", neighborhoods:["Termiz 34"], 
    address:"Termiz, Surxondaryo, Uzbekistan", latitude:37.2960, longitude:67.3115, radius:3000, description:"Bakery in Termiz"
  },
  {
    id:192, locationId: 19192, region:"Qashqadaryo", category:"Furniture & Interior", items:["Furniture workshop"], district:"Qarshi", neighborhoods:["Qarshi 1","Qarshi 2"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8580, longitude:65.7840, radius:3000, description:"Furniture workshop in Qarshi"
  },
  {
    id:193, locationId: 19193, region:"Qashqadaryo", category:"Furniture & Interior", items:["Soft furniture"], district:"Qarshi", neighborhoods:["Qarshi 3","Qarshi 4"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8590, longitude:65.7860, radius:3000, description:"Soft furniture in Qarshi"
  },
  {
    id:194, locationId: 19194, region:"Qashqadaryo", category:"Furniture & Interior", items:["Hard furniture"], district:"Qarshi", neighborhoods:["Qarshi 5","Qarshi 6"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8600, longitude:65.7880, radius:3000, description:"Hard furniture in Qarshi"
  },
  {
    id:195, locationId: 19195, region:"Qashqadaryo", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Qarshi", neighborhoods:["Qarshi 7","Qarshi 8"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8610, longitude:65.7900, radius:3000, description:"Kitchen furniture in Qarshi"
  },
  {
    id:196, locationId: 19196, region:"Qashqadaryo", category:"Furniture & Interior", items:["Furniture repair service"], district:"Qarshi", neighborhoods:["Qarshi 9","Qarshi 10"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8620, longitude:65.7920, radius:3000, description:"Furniture repair in Qarshi"
  },
  {
    id:197, locationId: 19197, region:"Qashqadaryo", category:"Home & Construction Services", items:["Home repair service"], district:"Qarshi", neighborhoods:["Qarshi 11","Qarshi 12"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8630, longitude:65.7940, radius:3000, description:"Home repair service in Qarshi"
  },
  {
    id:198, locationId: 19198, region:"Qashqadaryo", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Qarshi", neighborhoods:["Qarshi 13","Qarshi 14"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8640, longitude:65.7960, radius:3000, description:"AC installation in Qarshi"
  },
  {
    id:199, locationId: 19199, region:"Qashqadaryo", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Qarshi", neighborhoods:["Qarshi 15","Qarshi 16"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8650, longitude:65.7980, radius:3000, description:"Carpentry workshop in Qarshi"
  },
  {
    id:200, locationId: 20200, region:"Qashqadaryo", category:"Home & Construction Services", items:["Plumbing service"], district:"Qarshi", neighborhoods:["Qarshi 17","Qarshi 18"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8660, longitude:65.8000, radius:3000, description:"Plumbing service in Qarshi"
  },
  {
    id:201, locationId: 20201, region:"Qashqadaryo", category:"Home & Construction Services", items:["Electrical repair service"], district:"Qarshi", neighborhoods:["Qarshi 19","Qarshi 20"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8670, longitude:65.8020, radius:3000, description:"Electrical repair in Qarshi"
  },
  {
    id:202, locationId: 20202, region:"Qashqadaryo", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Qarshi", neighborhoods:["Qarshi 21","Qarshi 22"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8680, longitude:65.8040, radius:3000, description:"Barbershop in Qarshi"
  },
  {
    id:203, locationId: 20203, region:"Qashqadaryo", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Qarshi", neighborhoods:["Qarshi 23","Qarshi 24"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8690, longitude:65.8060, radius:3000, description:"Dry cleaning in Qarshi"
  },
  {
    id:204, locationId: 20204, region:"Qashqadaryo", category:"Automotive Services", items:["Car repair workshop"], district:"Qarshi", neighborhoods:["Qarshi 25"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8700, longitude:65.8080, radius:3000, description:"Car repair workshop in Qarshi"
  },
  {
    id:205, locationId: 20205, region:"Qashqadaryo", category:"Automotive Services", items:["Auto service center"], district:"Qarshi", neighborhoods:["Qarshi 26"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8710, longitude:65.8100, radius:3000, description:"Auto service center in Qarshi"
  },
  {
    id:206, locationId: 20206, region:"Qashqadaryo", category:"Education & Learning", items:["Training center"], district:"Qarshi", neighborhoods:["Qarshi 27"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8720, longitude:65.8120, radius:3000, description:"Training center in Qarshi"
  },
  {
    id:207, locationId: 20207, region:"Qashqadaryo", category:"Education & Learning", items:["Language school"], district:"Qarshi", neighborhoods:["Qarshi 28"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8730, longitude:65.8140, radius:3000, description:"Language school in Qarshi"
  },
  {
    id:208, locationId: 20208, region:"Qashqadaryo", category:"Food & Business Places", items:["Kitchen"], district:"Qarshi", neighborhoods:["Qarshi 29"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8740, longitude:65.8160, radius:3000, description:"Kitchen in Qarshi"
  },
  {
    id:209, locationId: 20209, region:"Qashqadaryo", category:"Food & Business Places", items:["Café"], district:"Qarshi", neighborhoods:["Qarshi 30"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8750, longitude:65.8180, radius:3000, description:"Café in Qarshi"
  },
  {
    id:210, locationId: 21210, region:"Qashqadaryo", category:"Food & Business Places", items:["Restaurant"], district:"Qarshi", neighborhoods:["Qarshi 31"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8760, longitude:65.8200, radius:3000, description:"Restaurant in Qarshi"
  },
  {
    id:211, locationId: 21211, region:"Qashqadaryo", category:"Food & Business Places", items:["Shop"], district:"Qarshi", neighborhoods:["Qarshi 32"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8770, longitude:65.8220, radius:3000, description:"Shop in Qarshi"
  },
  {
    id:212, locationId: 21212, region:"Qashqadaryo", category:"Food & Business Places", items:["Mosque"], district:"Qarshi", neighborhoods:["Qarshi 33"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8780, longitude:65.8240, radius:3000, description:"Mosque in Qarshi"
  },
  {
    id:213, locationId: 21213, region:"Qashqadaryo", category:"Food & Business Places", items:["Bakery"], district:"Qarshi", neighborhoods:["Qarshi 34"], 
    address:"Qarshi, Qashqadaryo, Uzbekistan", latitude:38.8790, longitude:65.8260, radius:3000, description:"Bakery in Qarshi"
  },
  {
    id:214, locationId: 21214, region:"Jizzax", category:"Furniture & Interior", items:["Furniture workshop"], district:"Jizzax", neighborhoods:["Jizzax 1","Jizzax 2"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1200, longitude:67.8400, radius:3000, description:"Furniture workshop in Jizzax"
  },
  {
    id:215, locationId: 21215, region:"Jizzax", category:"Furniture & Interior", items:["Soft furniture"], district:"Jizzax", neighborhoods:["Jizzax 3","Jizzax 4"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1210, longitude:67.8420, radius:3000, description:"Soft furniture in Jizzax"
  },
  {
    id:216, locationId: 21216, region:"Jizzax", category:"Furniture & Interior", items:["Hard furniture"], district:"Jizzax", neighborhoods:["Jizzax 5","Jizzax 6"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1220, longitude:67.8440, radius:3000, description:"Hard furniture in Jizzax"
  },
  {
    id:217, locationId: 21217, region:"Jizzax", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Jizzax", neighborhoods:["Jizzax 7","Jizzax 8"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1230, longitude:67.8460, radius:3000, description:"Kitchen furniture in Jizzax"
  },
  {
    id:218, locationId: 21218, region:"Jizzax", category:"Furniture & Interior", items:["Furniture repair service"], district:"Jizzax", neighborhoods:["Jizzax 9","Jizzax 10"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1240, longitude:67.8480, radius:3000, description:"Furniture repair in Jizzax"
  },
  {
    id:219, locationId: 21219, region:"Jizzax", category:"Home & Construction Services", items:["Home repair service"], district:"Jizzax", neighborhoods:["Jizzax 11","Jizzax 12"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1250, longitude:67.8500, radius:3000, description:"Home repair service in Jizzax"
  },
  {
    id:220, locationId: 22220, region:"Jizzax", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Jizzax", neighborhoods:["Jizzax 13","Jizzax 14"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1260, longitude:67.8520, radius:3000, description:"AC installation in Jizzax"
  },
  {
    id:221, locationId: 22221, region:"Jizzax", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Jizzax", neighborhoods:["Jizzax 15","Jizzax 16"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1270, longitude:67.8540, radius:3000, description:"Carpentry workshop in Jizzax"
  },
  {
    id:222, locationId: 22222, region:"Jizzax", category:"Home & Construction Services", items:["Plumbing service"], district:"Jizzax", neighborhoods:["Jizzax 17","Jizzax 18"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1280, longitude:67.8560, radius:3000, description:"Plumbing service in Jizzax"
  },
  {
    id:223, locationId: 22223, region:"Jizzax", category:"Home & Construction Services", items:["Electrical repair service"], district:"Jizzax", neighborhoods:["Jizzax 19","Jizzax 20"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1290, longitude:67.8580, radius:3000, description:"Electrical repair in Jizzax"
  },
  {
    id:224, locationId: 22224, region:"Jizzax", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Jizzax", neighborhoods:["Jizzax 21","Jizzax 22"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1300, longitude:67.8600, radius:3000, description:"Barbershop in Jizzax"
  },
  {
    id:225, locationId: 22225, region:"Jizzax", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Jizzax", neighborhoods:["Jizzax 23","Jizzax 24"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1310, longitude:67.8620, radius:3000, description:"Dry cleaning in Jizzax"
  },
  {
    id:226, locationId: 22226, region:"Jizzax", category:"Automotive Services", items:["Car repair workshop"], district:"Jizzax", neighborhoods:["Jizzax 25"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1320, longitude:67.8640, radius:3000, description:"Car repair workshop in Jizzax"
  },
  {
    id:227, locationId: 22227, region:"Jizzax", category:"Automotive Services", items:["Auto service center"], district:"Jizzax", neighborhoods:["Jizzax 26"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1330, longitude:67.8660, radius:3000, description:"Auto service center in Jizzax"
  },
  {
    id:228, locationId: 22228, region:"Jizzax", category:"Education & Learning", items:["Training center"], district:"Jizzax", neighborhoods:["Jizzax 27"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1340, longitude:67.8680, radius:3000, description:"Training center in Jizzax"
  },
  {
    id:229, locationId: 22229, region:"Jizzax", category:"Education & Learning", items:["Language school"], district:"Jizzax", neighborhoods:["Jizzax 28"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1350, longitude:67.8700, radius:3000, description:"Language school in Jizzax"
  },
  {
    id:230, locationId: 23230, region:"Jizzax", category:"Food & Business Places", items:["Kitchen"], district:"Jizzax", neighborhoods:["Jizzax 29"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1360, longitude:67.8720, radius:3000, description:"Kitchen in Jizzax"
  },
  {
    id:231, locationId: 23231, region:"Jizzax", category:"Food & Business Places", items:["Café"], district:"Jizzax", neighborhoods:["Jizzax 30"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1370, longitude:67.8740, radius:3000, description:"Café in Jizzax"
  },
  {
    id:232, locationId: 23232, region:"Jizzax", category:"Food & Business Places", items:["Restaurant"], district:"Jizzax", neighborhoods:["Jizzax 31"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1380, longitude:67.8760, radius:3000, description:"Restaurant in Jizzax"
  },
  {
    id:233, locationId: 23233, region:"Jizzax", category:"Food & Business Places", items:["Shop"], district:"Jizzax", neighborhoods:["Jizzax 32"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1390, longitude:67.8780, radius:3000, description:"Shop in Jizzax"
  },
  {
    id:234, locationId: 23234, region:"Jizzax", category:"Food & Business Places", items:["Mosque"], district:"Jizzax", neighborhoods:["Jizzax 33"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1400, longitude:67.8800, radius:3000, description:"Mosque in Jizzax"
  },
  {
    id:235, locationId: 23235, region:"Jizzax", category:"Food & Business Places", items:["Bakery"], district:"Jizzax", neighborhoods:["Jizzax 34"], 
    address:"Jizzax, Jizzax, Uzbekistan", latitude:40.1410, longitude:67.8820, radius:3000, description:"Bakery in Jizzax"
  },
  {
    id:236, locationId: 23236, region:"Sirdaryo", category:"Furniture & Interior", items:["Furniture workshop"], district:"Guliston", neighborhoods:["Guliston 1","Guliston 2"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0640, longitude:68.7860, radius:3000, description:"Furniture workshop in Guliston"
  },
  {
    id:237, locationId: 23237, region:"Sirdaryo", category:"Furniture & Interior", items:["Soft furniture"], district:"Guliston", neighborhoods:["Guliston 3","Guliston 4"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0650, longitude:68.7880, radius:3000, description:"Soft furniture in Guliston"
  },
  {
    id:238, locationId: 23238, region:"Sirdaryo", category:"Furniture & Interior", items:["Hard furniture"], district:"Guliston", neighborhoods:["Guliston 5","Guliston 6"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0660, longitude:68.7900, radius:3000, description:"Hard furniture in Guliston"
  },
  {
    id:239, locationId: 23239, region:"Sirdaryo", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Guliston", neighborhoods:["Guliston 7","Guliston 8"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0670, longitude:68.7920, radius:3000, description:"Kitchen furniture in Guliston"
  },
  {
    id:240, locationId: 24240, region:"Sirdaryo", category:"Furniture & Interior", items:["Furniture repair service"], district:"Guliston", neighborhoods:["Guliston 9","Guliston 10"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0680, longitude:68.7940, radius:3000, description:"Furniture repair in Guliston"
  },
  {
    id:241, locationId: 24241, region:"Sirdaryo", category:"Home & Construction Services", items:["Home repair service"], district:"Guliston", neighborhoods:["Guliston 11","Guliston 12"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0690, longitude:68.7960, radius:3000, description:"Home repair service in Guliston"
  },
  {
    id:242, locationId: 24242, region:"Sirdaryo", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Guliston", neighborhoods:["Guliston 13","Guliston 14"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0700, longitude:68.7980, radius:3000, description:"AC installation in Guliston"
  },
  {
    id:243, locationId: 24243, region:"Sirdaryo", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Guliston", neighborhoods:["Guliston 15","Guliston 16"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0710, longitude:68.8000, radius:3000, description:"Carpentry workshop in Guliston"
  },
  {
    id:244, locationId: 24244, region:"Sirdaryo", category:"Home & Construction Services", items:["Plumbing service"], district:"Guliston", neighborhoods:["Guliston 17","Guliston 18"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0720, longitude:68.8020, radius:3000, description:"Plumbing service in Guliston"
  },
  {
    id:245, locationId: 24245, region:"Sirdaryo", category:"Home & Construction Services", items:["Electrical repair service"], district:"Guliston", neighborhoods:["Guliston 19","Guliston 20"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0730, longitude:68.8040, radius:3000, description:"Electrical repair in Guliston"
  },
  {
    id:246, locationId: 24246, region:"Sirdaryo", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Guliston", neighborhoods:["Guliston 21","Guliston 22"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0740, longitude:68.8060, radius:3000, description:"Barbershop in Guliston"
  },
  {
    id:247, locationId: 24247, region:"Sirdaryo", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Guliston", neighborhoods:["Guliston 23","Guliston 24"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0750, longitude:68.8080, radius:3000, description:"Dry cleaning in Guliston"
  },
  {
    id:248, locationId: 24248, region:"Sirdaryo", category:"Automotive Services", items:["Car repair workshop"], district:"Guliston", neighborhoods:["Guliston 25"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0760, longitude:68.8100, radius:3000, description:"Car repair workshop in Guliston"
  },
  {
    id:249, locationId: 24249, region:"Sirdaryo", category:"Automotive Services", items:["Auto service center"], district:"Guliston", neighborhoods:["Guliston 26"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0770, longitude:68.8120, radius:3000, description:"Auto service center in Guliston"
  },
  {
    id:250, locationId: 25250, region:"Sirdaryo", category:"Education & Learning", items:["Training center"], district:"Guliston", neighborhoods:["Guliston 27"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0780, longitude:68.8140, radius:3000, description:"Training center in Guliston"
  },
  {
    id:251, locationId: 25251, region:"Sirdaryo", category:"Education & Learning", items:["Language school"], district:"Guliston", neighborhoods:["Guliston 28"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0790, longitude:68.8160, radius:3000, description:"Language school in Guliston"
  },
  {
    id:252, locationId: 25252, region:"Sirdaryo", category:"Food & Business Places", items:["Kitchen"], district:"Guliston", neighborhoods:["Guliston 29"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0800, longitude:68.8180, radius:3000, description:"Kitchen in Guliston"
  },
  {
    id:253, locationId: 25253, region:"Sirdaryo", category:"Food & Business Places", items:["Café"], district:"Guliston", neighborhoods:["Guliston 30"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0810, longitude:68.8200, radius:3000, description:"Café in Guliston"
  },
  {
    id:254, locationId: 25254, region:"Sirdaryo", category:"Food & Business Places", items:["Restaurant"], district:"Guliston", neighborhoods:["Guliston 31"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0820, longitude:68.8220, radius:3000, description:"Restaurant in Guliston"
  },
  {
    id:255, locationId: 25255, region:"Sirdaryo", category:"Food & Business Places", items:["Shop"], district:"Guliston", neighborhoods:["Guliston 32"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0830, longitude:68.8240, radius:3000, description:"Shop in Guliston"
  },
  {
    id:256, locationId: 25256, region:"Sirdaryo", category:"Food & Business Places", items:["Mosque"], district:"Guliston", neighborhoods:["Guliston 33"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0840, longitude:68.8260, radius:3000, description:"Mosque in Guliston"
  },
  {
    id:257, locationId: 25257, region:"Sirdaryo", category:"Food & Business Places", items:["Bakery"], district:"Guliston", neighborhoods:["Guliston 34"], 
    address:"Guliston, Sirdaryo, Uzbekistan", latitude:40.0850, longitude:68.8280, radius:3000, description:"Bakery in Guliston"
  },
  {
    id:258, locationId: 25258, region:"Xorazm", category:"Furniture & Interior", items:["Furniture workshop"], district:"Urgench", neighborhoods:["Urgench 1","Urgench 2"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5560, longitude:60.6360, radius:3000, description:"Furniture workshop in Urgench"
  },
  {
    id:259, locationId: 25259, region:"Xorazm", category:"Furniture & Interior", items:["Soft furniture"], district:"Urgench", neighborhoods:["Urgench 3","Urgench 4"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5570, longitude:60.6380, radius:3000, description:"Soft furniture in Urgench"
  },
  {
    id:260, locationId: 26260, region:"Xorazm", category:"Furniture & Interior", items:["Hard furniture"], district:"Urgench", neighborhoods:["Urgench 5","Urgench 6"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5580, longitude:60.6400, radius:3000, description:"Hard furniture in Urgench"
  },
  {
    id:261, locationId: 26261, region:"Xorazm", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Urgench", neighborhoods:["Urgench 7","Urgench 8"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5590, longitude:60.6420, radius:3000, description:"Kitchen furniture in Urgench"
  },
  {
    id:262, locationId: 26262, region:"Xorazm", category:"Furniture & Interior", items:["Furniture repair service"], district:"Urgench", neighborhoods:["Urgench 9","Urgench 10"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5600, longitude:60.6440, radius:3000, description:"Furniture repair in Urgench"
  },
  {
    id:263, locationId: 26263, region:"Xorazm", category:"Home & Construction Services", items:["Home repair service"], district:"Urgench", neighborhoods:["Urgench 11","Urgench 12"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5610, longitude:60.6460, radius:3000, description:"Home repair service in Urgench"
  },
  {
    id:264, locationId: 26264, region:"Xorazm", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Urgench", neighborhoods:["Urgench 13","Urgench 14"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5620, longitude:60.6480, radius:3000, description:"AC installation in Urgench"
  },
  {
    id:265, locationId: 26265, region:"Xorazm", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Urgench", neighborhoods:["Urgench 15","Urgench 16"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5630, longitude:60.6500, radius:3000, description:"Carpentry workshop in Urgench"
  },
  {
    id:266, locationId: 26266, region:"Xorazm", category:"Home & Construction Services", items:["Plumbing service"], district:"Urgench", neighborhoods:["Urgench 17","Urgench 18"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5640, longitude:60.6520, radius:3000, description:"Plumbing service in Urgench"
  },
  {
    id:267, locationId: 26267, region:"Xorazm", category:"Home & Construction Services", items:["Electrical repair service"], district:"Urgench", neighborhoods:["Urgench 19","Urgench 20"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5650, longitude:60.6540, radius:3000, description:"Electrical repair in Urgench"
  },
  {
    id:268, locationId: 26268, region:"Xorazm", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Urgench", neighborhoods:["Urgench 21","Urgench 22"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5660, longitude:60.6560, radius:3000, description:"Barbershop in Urgench"
  },
  {
    id:269, locationId: 26269, region:"Xorazm", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Urgench", neighborhoods:["Urgench 23","Urgench 24"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5670, longitude:60.6580, radius:3000, description:"Dry cleaning in Urgench"
  },
  {
    id:270, locationId: 27270, region:"Xorazm", category:"Automotive Services", items:["Car repair workshop"], district:"Urgench", neighborhoods:["Urgench 25"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5680, longitude:60.6600, radius:3000, description:"Car repair workshop in Urgench"
  },
  {
    id:271, locationId: 27271, region:"Xorazm", category:"Automotive Services", items:["Auto service center"], district:"Urgench", neighborhoods:["Urgench 26"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5690, longitude:60.6620, radius:3000, description:"Auto service center in Urgench"
  },
  {
    id:272, locationId: 27272, region:"Xorazm", category:"Education & Learning", items:["Training center"], district:"Urgench", neighborhoods:["Urgench 27"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5700, longitude:60.6640, radius:3000, description:"Training center in Urgench"
  },
  {
    id:273, locationId: 27273, region:"Xorazm", category:"Education & Learning", items:["Language school"], district:"Urgench", neighborhoods:["Urgench 28"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5710, longitude:60.6660, radius:3000, description:"Language school in Urgench"
  },
  {
    id:274, locationId: 27274, region:"Xorazm", category:"Food & Business Places", items:["Kitchen"], district:"Urgench", neighborhoods:["Urgench 29"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5720, longitude:60.6680, radius:3000, description:"Kitchen in Urgench"
  },
  {
    id:275, locationId: 27275, region:"Xorazm", category:"Food & Business Places", items:["Café"], district:"Urgench", neighborhoods:["Urgench 30"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5730, longitude:60.6700, radius:3000, description:"Café in Urgench"
  },
  {
    id:276, locationId: 27276, region:"Xorazm", category:"Food & Business Places", items:["Restaurant"], district:"Urgench", neighborhoods:["Urgench 31"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5740, longitude:60.6720, radius:3000, description:"Restaurant in Urgench"
  },
  {
    id:277, locationId: 27277, region:"Xorazm", category:"Food & Business Places", items:["Shop"], district:"Urgench", neighborhoods:["Urgench 32"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5750, longitude:60.6740, radius:3000, description:"Shop in Urgench"
  },
  {
    id:278, locationId: 27278, region:"Xorazm", category:"Food & Business Places", items:["Mosque"], district:"Urgench", neighborhoods:["Urgench 33"], 
    address:"Urgench, Xorazm, Uzbekistan", latitude:41.5760, longitude:60.6760, radius:3000, description:"Mosque in Urgench"
  },
  {
    id:279, locationId: 27279, region:"Qoraqalpog‘iston", category:"Furniture & Interior", items:["Furniture workshop"], district:"Nukus", neighborhoods:["Nukus 1","Nukus 2"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4520, longitude:59.6130, radius:3000, description:"Furniture workshop in Nukus"
  },
  {
    id:280, locationId: 28280, region:"Qoraqalpog‘iston", category:"Furniture & Interior", items:["Soft furniture"], district:"Nukus", neighborhoods:["Nukus 3","Nukus 4"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4530, longitude:59.6150, radius:3000, description:"Soft furniture in Nukus"
  },
  {
    id:281, locationId: 28281, region:"Qoraqalpog‘iston", category:"Furniture & Interior", items:["Hard furniture"], district:"Nukus", neighborhoods:["Nukus 5","Nukus 6"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4540, longitude:59.6170, radius:3000, description:"Hard furniture in Nukus"
  },
  {
    id:282, locationId: 28282, region:"Qoraqalpog‘iston", category:"Furniture & Interior", items:["Kitchen furniture"], district:"Nukus", neighborhoods:["Nukus 7","Nukus 8"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4550, longitude:59.6190, radius:3000, description:"Kitchen furniture in Nukus"
  },
  {
    id:283, locationId: 28283, region:"Qoraqalpog‘iston", category:"Furniture & Interior", items:["Furniture repair service"], district:"Nukus", neighborhoods:["Nukus 9","Nukus 10"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4560, longitude:59.6210, radius:3000, description:"Furniture repair in Nukus"
  },
  {
    id:284, locationId: 28284, region:"Qoraqalpog‘iston", category:"Home & Construction Services", items:["Home repair service"], district:"Nukus", neighborhoods:["Nukus 11","Nukus 12"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4570, longitude:59.6230, radius:3000, description:"Home repair service in Nukus"
  },
  {
    id:285, locationId: 28285, region:"Qoraqalpog‘iston", category:"Home & Construction Services", items:["Air conditioner installation service"], district:"Nukus", neighborhoods:["Nukus 13","Nukus 14"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4580, longitude:59.6250, radius:3000, description:"AC installation in Nukus"
  },
  {
    id:286, locationId: 28286, region:"Qoraqalpog‘iston", category:"Home & Construction Services", items:["Carpentry workshop"], district:"Nukus", neighborhoods:["Nukus 15","Nukus 16"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4590, longitude:59.6270, radius:3000, description:"Carpentry workshop in Nukus"
  },
  {
    id:287, locationId: 28287, region:"Qoraqalpog‘iston", category:"Home & Construction Services", items:["Plumbing service"], district:"Nukus", neighborhoods:["Nukus 17","Nukus 18"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4600, longitude:59.6290, radius:3000, description:"Plumbing service in Nukus"
  },
  {
    id:288, locationId: 28288, region:"Qoraqalpog‘iston", category:"Home & Construction Services", items:["Electrical repair service"], district:"Nukus", neighborhoods:["Nukus 19","Nukus 20"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4610, longitude:59.6310, radius:3000, description:"Electrical repair in Nukus"
  },
  {
    id:289, locationId: 28289, region:"Qoraqalpog‘iston", category:"Personal Care & Maintenance", items:["Barbershop"], district:"Nukus", neighborhoods:["Nukus 21","Nukus 22"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4620, longitude:59.6330, radius:3000, description:"Barbershop in Nukus"
  },
  {
    id:290, locationId: 29290, region:"Qoraqalpog‘iston", category:"Personal Care & Maintenance", items:["Dry cleaning"], district:"Nukus", neighborhoods:["Nukus 23","Nukus 24"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4630, longitude:59.6350, radius:3000, description:"Dry cleaning in Nukus"
  },
  {
    id:291, locationId: 29291, region:"Qoraqalpog‘iston", category:"Automotive Services", items:["Car repair workshop"], district:"Nukus", neighborhoods:["Nukus 25"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4640, longitude:59.6370, radius:3000, description:"Car repair workshop in Nukus"
  },
  {
    id:292, locationId: 29292, region:"Qoraqalpog‘iston", category:"Automotive Services", items:["Auto service center"], district:"Nukus", neighborhoods:["Nukus 26"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4650, longitude:59.6390, radius:3000, description:"Auto service center in Nukus"
  },
  {
    id:293, locationId: 29293, region:"Qoraqalpog‘iston", category:"Education & Learning", items:["Training center"], district:"Nukus", neighborhoods:["Nukus 27"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4660, longitude:59.6410, radius:3000, description:"Training center in Nukus"
  },
  {
    id:294, locationId: 29294, region:"Qoraqalpog‘iston", category:"Education & Learning", items:["Language school"], district:"Nukus", neighborhoods:["Nukus 28"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4670, longitude:59.6430, radius:3000, description:"Language school in Nukus"
  },
  {
    id:295, locationId: 29295, region:"Qoraqalpog‘iston", category:"Food & Business Places", items:["Kitchen"], district:"Nukus", neighborhoods:["Nukus 29"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4680, longitude:59.6450, radius:3000, description:"Kitchen in Nukus"
  },
  {
    id:296, locationId: 29296, region:"Qoraqalpog‘iston", category:"Food & Business Places", items:["Café"], district:"Nukus", neighborhoods:["Nukus 30"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4690, longitude:59.6470, radius:3000, description:"Café in Nukus"
  },
  {
    id:297, locationId: 29297, region:"Qoraqalpog‘iston", category:"Food & Business Places", items:["Restaurant"], district:"Nukus", neighborhoods:["Nukus 31"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4700, longitude:59.6490, radius:3000, description:"Restaurant in Nukus"
  },
  {
    id:298, locationId: 29298, region:"Qoraqalpog‘iston", category:"Food & Business Places", items:["Shop"], district:"Nukus", neighborhoods:["Nukus 32"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4710, longitude:59.6510, radius:3000, description:"Shop in Nukus"
  },
  {
    id:299, locationId: 29299, region:"Qoraqalpog‘iston", category:"Food & Business Places", items:["Mosque"], district:"Nukus", neighborhoods:["Nukus 33"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4720, longitude:59.6530, radius:3000, description:"Mosque in Nukus"
  },
  {
    id:300, locationId: 30300, region:"Qoraqalpog‘iston", category:"Food & Business Places", items:["Mosque"], district:"Nukus", neighborhoods:["Nukus 34"], 
    address:"Nukus, Qoraqalpog‘iston, Uzbekistan", latitude:42.4730, longitude:59.6550, radius:3000, description:"Mosque in Nukus"
  }

];
