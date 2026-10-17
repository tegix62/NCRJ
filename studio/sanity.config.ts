import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'National Collaborative',
  projectId: 'uzdi90po',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
