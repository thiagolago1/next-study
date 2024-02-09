export default async function GithubProfile() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch('https://api.github.com/users/thiagolago1');
  const user = await response.json();

  return (
    <pre>{JSON.stringify(user, null, 2)}</pre>
  );
}