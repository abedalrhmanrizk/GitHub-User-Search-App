import React from 'react';
import Header from './components/header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Body from './components/body/Body';
import useSWR from 'swr';

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  return json;
}

function App() {
  const [quarry, setQuarry] = React.useState('octocat');
  const ENDPOINT = `https://api.github.com/users/${quarry}`;
  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher);

  // if (data.message === 'Not Found') return;
  return (
    <main>
      <Header />
      <SearchBar setQuarry={setQuarry} />
      <Body data={data} isLoading={isLoading} error={error} />
    </main>
  );
}

export default App;
