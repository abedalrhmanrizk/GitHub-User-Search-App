export function formatApiDate(apiDate) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = new Date(apiDate).toLocaleDateString(
    'en-US',
    options
  );
  return `Joined ${formattedDate}`;
}

const apiDate = '2011-01-25T18:44:36Z';
const formattedDate = formatApiDate(apiDate);
console.log(formattedDate);
