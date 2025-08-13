import { useEffect, useRef } from 'react';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    import('https://unpkg.com/threejs-toys@0.0.7/build/threejs-toys.module.cdn.min.js')
      .then(({ butterFliesBackground }) => {
        butterFliesBackground({
          el: containerRef.current,
          mouseControls: true,
          auto
        });
      });
  }, []);

  return (
    <div
      ref="containerRef"
    >
    </div>
  )
}

export default App
