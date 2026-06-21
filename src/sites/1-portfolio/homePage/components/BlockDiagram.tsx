import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Dynamic tab routing
const handleNodeClick = (event: any, node: any) => {
  if (node.data?.url) {
    window.open(node.data.url, '_blank');
  }
  event;
};

// Architecture Coordinates Matrix
const initialNodes = [
  /* Base Root Level */
  { id: 'main', type: 'input', data: { label: 'Project Architecture' }, position: { x: 380, y: 20 } },

  /* Technical Operations - Stack Matrix */
  { id: 'supabase', data: { label: '🔥 Supabase' }, position: { x: 80, y: 130 } },
  { id: 'render', data: { label: '⚡ Render' }, position: { x: 80, y: 200 } },
  { id: 'netlify', data: { label: '🌐 Netlify' }, position: { x: 80, y: 270 } },
  { id: 'docker', data: { label: '🐳 Docker' }, position: { x: 80, y: 340 } },

  /* System Application Categories */
  { id: 'portfolio', data: { label: '🏠 Portfolio' }, position: { x: 380, y: 150 } },
  { id: 'education', data: { label: '📚 Classes', url: '/online-classes' }, position: { x: 380, y: 240 } },
  { id: 'ecommerce', data: { label: '🛍️ E-Commerce Hub', }, position: { x: 380, y: 330 } },

  /* Commercial Inventory Branches */
  { id: 'saree', data: { label: 'VastraMala', url: '/saree' }, position: { x: 680, y: 160 } },
  { id: 'suit', data: { label: 'Designer Suits', url: '/suits' }, position: { x: 680, y: 220 } },
  { id: 'beauty', data: { label: 'Beauty Products', url: '/beauty' }, position: { x: 680, y: 280 } },
  { id: 'electronics', data: { label: 'Electronic Units', url: '/components' }, position: { x: 680, y: 340 } }
];

// Connection Pipeline Rules
const initialEdges = [
  // core core routing logic
  { id: 'e-sub', source: 'main', target: 'supabase', animated: true },
  { id: 'e-ren', source: 'main', target: 'render', animated: true },
  { id: 'e-net', source: 'main', target: 'netlify', animated: true },
  { id: 'e-doc', source: 'main', target: 'docker', animated: true },

  { id: 'e-port', source: 'main', target: 'portfolio', animated: true },
  { id: 'e-edu', source: 'main', target: 'education', animated: true },
  { id: 'e-eco', source: 'main', target: 'ecommerce', animated: true },

  // Ecom sub nodes pipeline
  { id: 'e-sar', source: 'ecommerce', target: 'saree', animated: true },
  { id: 'e-sui', source: 'ecommerce', target: 'suit', animated: true },
  { id: 'e-bea', source: 'ecommerce', target: 'beauty', animated: true },
  { id: 'e-ele', source: 'ecommerce', target: 'electronics', animated: true }
];

export default function BlockDiagram() {
  return (
    <section className="diagram-section">
      <h2 className="diagram-heading">Website Architecture</h2>

      <div className="diagram-canvas-wrapper">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          onNodeClick={handleNodeClick}
          fitView
          fitViewOptions={{ padding: 0.2 }} // Autocentering matrix bounds
          minZoom={0.6}
          maxZoom={1.5}
        >
          {/* subtle deep pattern dots */}
          <Background color="#10b981" gap={20} size={1.5} />
          <Controls position="bottom-right" showInteractive={false} />
        </ReactFlow>
      </div>
    </section>
  );
}
