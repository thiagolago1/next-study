import { Suspense } from 'react';
import GithubProfile from "@/components/github-profile";
import LongWaitComponent from "@/components/long-wait-component";

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <div>
      <h1>Home!</h1>
      <h1>Texto</h1>
      <h1>Parágrafo</h1>

      <Suspense fallback={<p>Carregando Long Wait Component...</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando Github profile..</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  );
}
