import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { componentGenerator, } from '@nrwl/react';

export default async function (tree: Tree, schema: any) {
  await componentGenerator(tree, {
    ...schema,
    name: 'smart'+ schema.name,
    style:'scss',
    project: 'store',
    export: true
  })
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
