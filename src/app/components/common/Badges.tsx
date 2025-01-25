// export interface BadgeProps {
//   text: string;
//   color:
//     | 'blue'
//     | 'gray'
//     | 'red'
//     | 'green'
//     | 'yellow'
//     | 'indigo'
//     | 'purple'
//     | 'pink';
// }

export enum BadgeTypes {
  Fullstack = 'green',
  Responsive = 'yellow',
  Frontend = 'blue',
  SPA = 'red',
  'FSD Architecture' = 'purple',
  Design = 'pink',
  'Mykhailo Yatsenko' = 'indigo',
}

export interface BadgeProps {
  type: keyof typeof BadgeTypes; // Ключи из enum
}

const Badge: React.FC<BadgeProps> = ({ type }) => {
  const baseClasses = 'text-sm font-medium me-2 px-2.5 py-0.5 rounded';
  const lightColors: Record<string, string> = {
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    blue: 'bg-blue-100 text-blue-800',
    red: 'bg-red-100 text-red-800',
    indigo: 'dark:bg-indigo-900 dark:text-indigo-300',
    gray: 'bg-gray-100 text-gray-800',
    purple: 'bg-purple-100 text-purple-800',
    pink: 'bg-pink-100 text-pink-800',
  };
  const darkColors: Record<string, string> = {
    green: 'dark:bg-green-900 dark:text-green-300',
    yellow: 'dark:bg-yellow-900 dark:text-yellow-300',
    blue: 'dark:bg-blue-900 dark:text-blue-300',
    red: 'dark:bg-red-900 dark:text-red-300',
    indigo: 'dark:bg-indigo-900 dark:text-indigo-300',
    gray: 'dark:bg-gray-700 dark:text-gray-300',
    purple: 'dark:bg-purple-900 dark:text-purple-300',
    pink: 'dark:bg-pink-900 dark:text-pink-300',
  };

  const color = BadgeTypes[type]; // Определяем цвет из enum
  const selectedLightColor = lightColors[color];
  const selectedDarkColor = darkColors[color];

  return (
    <span
      className={`${baseClasses} ${selectedLightColor} ${selectedDarkColor}`}
    >
      {type}
    </span>
  );
};

export { Badge };
