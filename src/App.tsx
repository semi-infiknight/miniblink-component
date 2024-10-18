import MiniBlinkComponent from './components/Miniblink';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex min-w-[400px] flex-col items-center">
        <h1 className="mb-4 text-center text-4xl font-bold">mini</h1>
        <div className="mb-4 w-full">
          <MiniBlinkComponent
            rpcUrl={import.meta.env.VITE_PUBLIC_RPC_URL}
            actionUrl="solana-action:https://death.breadheads.io/api/actions/play"
          />
        </div>
        <WalletMultiButton />
      </div>
    </div>
  );
}

export default App;
