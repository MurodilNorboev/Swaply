export type MenuItem = {
  id: string;
  label: string;
  icon: string;
};

export type MenuGroup = {
  title: string;
  data: MenuItem[];
};

export const menuGroups: MenuGroup[] = [
  {
    title: 'Local Trade',
    data: [
      { id: '1', label: 'Used Goods', icon: '🥕' },
      { id: '2', label: 'Real Estate', icon: '🏠' },
      { id: '3', label: 'Part-Time Jobs', icon: '💼' },
      { id: '4', label: 'Used Cars', icon: '🚗' },
    ],
  },
  {
    title: 'Local Services',
    data: [
      { id: '5', label: 'Home & Repair', icon: '🔧' },
      { id: '6', label: 'Cleaning Services', icon: '🧹' },
      { id: '7', label: 'Moving Help', icon: '📦' },
      { id: '8', label: 'Tutors & Courses', icon: '📚' },
      { id: '9', label: 'Barbers & Salons', icon: '✂️' },
      { id: '10', label: 'Healthcare at Home', icon: '🏥' },
      { id: '11', label: 'Fitness & Sports', icon: '⚽' },
      { id: '12', label: 'Local Experts', icon: '👨‍🔧' },
    ],
  },
  {
    title: 'Food & Farms',
    data: [
      { id: '13', label: 'Restaurants', icon: '🍽️' },
      { id: '14', label: 'Cafés & Bakeries', icon: '☕' },
      { id: '15', label: 'Home Kitchens', icon: '🍳' },
      { id: '16', label: 'Farmers & Fresh Produce', icon: '🥬' },
    ],
  },
  {
    title: 'Local Stories',
    data: [
      { id: '17', label: 'Neighborhood Life', icon: '🏘️' },
      { id: '18', label: 'Community Groups', icon: '👥' },
      { id: '19', label: 'Local Events', icon: '🎉' },
      { id: '20', label: 'Share Stories', icon: '📣' },
    ],
  },
  {
    title: 'Finance & Rewards',
    data: [
      { id: '21', label: 'Carrot Pay', icon: '💳' },
      { id: '22', label: 'Benefit Missions', icon: '🏆' },
      { id: '23', label: 'Gift Shop', icon: '🎁' },
      { id: '24', label: 'Neighborhood Walk', icon: '🚶‍♀️' },
    ],
  },
];