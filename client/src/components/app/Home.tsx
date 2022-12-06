import { Icon, Stack, Text } from '@chakra-ui/react';
// eslint-disable-next-line import/no-unresolved
import { usePrefetchTreatments } from 'components/treatments/hooks/useTreatments';
// eslint-disable-next-line import/no-unresolved
import { ReactElement } from 'react';
import { GiFlowerPot } from 'react-icons/gi';

import { BackgroundImage } from '../common/BackgroundImage';

export function Home(): ReactElement {
  usePrefetchTreatments();
  return (
    <Stack align="center" justify="center" height="84vh">
      <BackgroundImage />
      <Text textAlign="center" fontFamily="Forum, sans-serif" fontSize="6em">
        <Icon m={4} verticalAlign="top" as={GiFlowerPot} />
        Lazy Days Spa
      </Text>
      <Text>Hours: limited</Text>
      <Text>Address: nearby</Text>
    </Stack>
  );
}
