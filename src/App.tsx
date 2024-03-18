import  { Suspense, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import FallbackSpinner from './shared/utils/FallBackSpinner';
import ConfigRoute from './shared/containers/configRoute';
import useModifiedData from './shared/hooks/useModifiedData';
import { useAuth } from './context/auth';
import { useNavigate } from 'react-router-dom';

const App = () => {
  useModifiedData();
  const user = useAuth();
  const navigate = useNavigate();
 const pathname = window.location.pathname;
  const allowed = ['/landing', '/create-account'];

  useEffect(() => {
    if (!user && !allowed.includes(pathname)) {
      navigate(allowed[0]);
    }
  }, [user, pathname, navigate, allowed]);

  return (
    <Box>
      <Suspense fallback={<FallbackSpinner />}>
        <ConfigRoute />
      </Suspense>
    </Box>
  );
};

export default App;
