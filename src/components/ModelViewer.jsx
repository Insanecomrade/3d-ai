import React from "react";

function ModelViewer() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Generated 3D Model (Mock)</h1>
      <div className="border h-96 mt-4 flex items-center justify-center text-gray-500">
        3D Viewer Placeholder
      </div>
      <div className="mt-4 space-x-2">
        <a href="/dummy.obj" download className="bg-blue-600 text-white px-4 py-2 rounded">Download .obj</a>
        <a href="/dummy.glb" download className="bg-blue-600 text-white px-4 py-2 rounded">Download .glb</a>
        <a href="/dummy.fbx" download className="bg-blue-600 text-white px-4 py-2 rounded">Download .fbx</a>
      </div>
    </div>
  );
}

export default ModelViewer;
