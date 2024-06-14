from graphviz import Digraph

# Initialize a new directed graph
dot = Digraph('SchemaDiagram', comment='Database Schema Diagram')

# Fact tables
fact_tables = [
    "userSessions",
    "userProducts",
    "userLevelLog",
    "questionAttempts"
]

# Dimension tables
dimension_tables = [
    "userDetails",
    "schools",
    "questionList",
    "orders",
    "containerMetaData",
    "containerMappings",
    "containerList",
    "assessmentTestRelease",
    "activationDetails",
    "sparkieChamps",
    "userAgents"
]

# Add nodes for fact tables
for table in fact_tables:
    dot.node(table, table, shape='box', style='filled', color='lightblue')

# Add nodes for dimension tables
for table in dimension_tables:
    dot.node(table, table, shape='ellipse', style='filled', color='lightyellow')

# Define relationships
relationships = {
    "userSessions": ["userDetails", "schools", "userProducts"],
    "userProducts": ["userDetails", "schools", "orders"],
    "userLevelLog": ["userDetails", "schools", "userProducts", "containerList"],
    "questionAttempts": ["userDetails", "userProducts", "schools", "containerList", "questionList"],
    "containerMappings": ["containerList"]
}

# Add edges based on relationships
for table, refs in relationships.items():
    for ref in refs:
        dot.edge(table, ref)

# Render the diagram
dot.render('/mnt/data/schema_diagram', format='png', view=False)
