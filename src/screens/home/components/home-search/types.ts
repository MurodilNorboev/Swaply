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
      { id: '1', label: 'Used Goods Trade', icon: '🥕' },
      { id: '2', label: 'Real Estate', icon: '🏠' },
      { id: '3', label: 'Part-Time Jobs', icon: '🔍' },
      { id: '4', label: 'Used Cars', icon: '🚗' },
    ],
  },
  {
    title: 'Local Stories',
    data: [
      { id: '5', label: 'Neighborhood Life', icon: '📘' },
      { id: '6', label: 'Groups/Meetings', icon: '🧑‍🤝‍🧑' },
      { id: '7', label: 'Local Events', icon: '📅' },
      { id: '8', label: 'Stories', icon: '▶️' },
    ],
  },
  {
    title: 'Finance/Benefits',
    data: [
      { id: '9', label: 'Carrot Pay', icon: '₩' },
      { id: '10', label: 'Benefit Mission', icon: '⚙️' },
      { id: '11', label: 'Gift Shop', icon: '🎁' },
      { id: '12', label: 'Neighborhood Walk', icon: '👟' },
    ],
  },
];