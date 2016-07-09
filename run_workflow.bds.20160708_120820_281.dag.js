$(function(){ // on dom ready

var cy = cytoscape({
  container: document.getElementById('cy'),
  
  style: [
    {
      selector: 'node',
      css: {
        'content': 'data(id)',
        'text-valign': 'center',
        'text-halign': 'center'
      }
    },
    {
      selector: 'edge',
      css: {
        'target-arrow-shape': 'triangle'
      }
    },
    {
      selector: ':selected',
      css: {
        'background-color': 'red',
        'line-color': 'red',
        'target-arrow-color': 'red',
        'source-arrow-color': 'red'
      }
    }
  ],
  
  elements: {
    nodes: [
      { data: { id: 'thread_Root' } },
      { data: { id: 'task.run_workflow.line_15.id_1', parent: 'thread_Root' } },
      { data: { id: 'task.run_workflow.line_19.id_2', parent: 'thread_Root' } },
      { data: { id: 'task.run_workflow.line_24.id_3', parent: 'thread_Root' } },
      { data: { id: 'task.run_workflow.line_28.id_4', parent: 'thread_Root' } },
      { data: { id: 'task.run_workflow.line_32.id_5', parent: 'thread_Root' } },
    ],
    edges: [
      { data: { id: 'None-thread_Root', source: 'None', target: 'thread_Root' } },
      { data: { id: 'threadid-threadid', source: 'threadid', target: 'threadid' } },
      { data: { id: 'task.run_workflow.line_15.id_1-task.run_workflow.line_19.id_2', source: 'task.run_workflow.line_15.id_1', target: 'task.run_workflow.line_19.id_2' } },
      { data: { id: 'task.run_workflow.line_15.id_1-task.run_workflow.line_19.id_2', source: 'task.run_workflow.line_15.id_1', target: 'task.run_workflow.line_19.id_2' } },
      { data: { id: 'task.run_workflow.line_19.id_2-task.run_workflow.line_24.id_3', source: 'task.run_workflow.line_19.id_2', target: 'task.run_workflow.line_24.id_3' } },
      { data: { id: 'task.run_workflow.line_19.id_2-task.run_workflow.line_24.id_3', source: 'task.run_workflow.line_19.id_2', target: 'task.run_workflow.line_24.id_3' } },
      { data: { id: 'task.run_workflow.line_24.id_3-task.run_workflow.line_28.id_4', source: 'task.run_workflow.line_24.id_3', target: 'task.run_workflow.line_28.id_4' } },
      { data: { id: 'task.run_workflow.line_24.id_3-task.run_workflow.line_28.id_4', source: 'task.run_workflow.line_24.id_3', target: 'task.run_workflow.line_28.id_4' } },
      { data: { id: 'task.run_workflow.line_28.id_4-task.run_workflow.line_32.id_5', source: 'task.run_workflow.line_28.id_4', target: 'task.run_workflow.line_32.id_5' } },
      { data: { id: 'task.run_workflow.line_24.id_3-task.run_workflow.line_32.id_5', source: 'task.run_workflow.line_24.id_3', target: 'task.run_workflow.line_32.id_5' } },
      { data: { id: 'task.run_workflow.line_19.id_2-task.run_workflow.line_32.id_5', source: 'task.run_workflow.line_19.id_2', target: 'task.run_workflow.line_32.id_5' } },
      { data: { id: 'task.run_workflow.line_28.id_4-task.run_workflow.line_32.id_5', source: 'task.run_workflow.line_28.id_4', target: 'task.run_workflow.line_32.id_5' } },
      { data: { id: 'task.run_workflow.line_24.id_3-task.run_workflow.line_32.id_5', source: 'task.run_workflow.line_24.id_3', target: 'task.run_workflow.line_32.id_5' } },
      { data: { id: 'task.run_workflow.line_19.id_2-task.run_workflow.line_32.id_5', source: 'task.run_workflow.line_19.id_2', target: 'task.run_workflow.line_32.id_5' } },
      { data: { id: 'taskid-taskid', source: 'taskid', target: 'taskid' } },
    ]
  },
  
  layout: {
    name: 'breadthfirst',
  }
});

}); // on dom ready

