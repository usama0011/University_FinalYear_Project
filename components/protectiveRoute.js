import { useRouter } from 'next/router';
import { useEffect } from 'react';
import jwt from 'jsonwebtoken';

const withAuth = (WrappedComponent) => {
  const hocComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const decoded = jwt.decode(token);
        if (decoded.isAdmin) {
          router.push('/admin');
        }
      } catch (error) {
        console.log(error);
        router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return hocComponent;
};

export default withAuth;
