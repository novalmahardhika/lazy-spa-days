import { createStandaloneToast } from '@chakra-ui/react';
import { QueryCache, QueryClient } from '@tanstack/react-query';

import { theme } from '../theme';

// const toast = createStandaloneToast({ theme });

// function queryErrorHandler(error: unknown): void {
//   // error is type unknown because in js, anything can be an error (e.g. throw(5))
//   const title =
//     error instanceof Error ? error.message : 'error connecting to server';

//   // prevent duplicate toasts
//   toast.closeAll();
//   toast({ title, status: 'error', variant: 'subtle', isClosable: true });
// }

// to satisfy typescript until this file has uncommented contents

const toast = createStandaloneToast(theme);

function getErrorHandler(error: unknown): void {
  const title =
    error instanceof Error ? error.message : 'Server Connecting Error';

  toast.closeAll();
  toast({ title, status: 'error', variant: 'subtle', isClosable: true });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: getErrorHandler,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

// Better Way To Use This Method
// export const queryClient = new QueryClient({
//   queryCache: new QueryCache({
//     onError: getErrorHandler,
//   }),
//   defaultOptions: {
//     queries: {
//       staleTime: 600000,
//       cacheTime: 900000,
//       refetchOnMount: false,
//       refetchOnReconnect: false,
//       refetchOnWindowFocus: false,
//     },
//   },
// });
