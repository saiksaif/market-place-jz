import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { Spin } from 'antd'; // Import Spin from Ant Design

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, []);

  return (
    <div>
      {true ? (
        <Spin size="large" tip="Loading...">
          <div style={{ minHeight: '100vh' }}></div>
        </Spin>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}
