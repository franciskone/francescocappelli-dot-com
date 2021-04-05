import Head from 'next/head';
import { Button } from '@windmill/react-ui';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Ciaone</main>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/vercel.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>

      <Button size="larger">Larger</Button>
      <Button size="large">Large</Button>
      <Button>Regular</Button>
      <Button size="small">Small</Button>
    </div>
  );
};

export default Home;
