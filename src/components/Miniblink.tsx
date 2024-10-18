import React from 'react';
import { MiniBlink, useAction } from '@dialectlabs/blinks';
import { useActionSolanaWalletAdapter } from '@dialectlabs/blinks/hooks/solana';

interface MiniBlinkComponentProps {
  rpcUrl: string;
  actionUrl: string;
}

const MiniBlinkComponent: React.FC<MiniBlinkComponentProps> = ({ rpcUrl, actionUrl }) => {
  const { adapter } = useActionSolanaWalletAdapter(rpcUrl);
  const { action, isLoading } = useAction({ url: actionUrl, adapter });

  if (isLoading || !action) {
    return <span>Loading...</span>;
  }

  return (
    <MiniBlink
      selector={(currentAction) =>
        currentAction.actions.find((a) => a.label === 'Nuke')!
      }
      action={action}
    />
  );
};

export default MiniBlinkComponent;
