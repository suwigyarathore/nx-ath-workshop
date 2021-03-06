import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { componentGenerator, } from '@nrwl/react';

export default async function (tree: Tree, schema: any) {
  await componentGenerator(tree, {
    name: 'smart'+ schema.name,
    style:'scss',
    project: 'store-ui-shared',
    export: true
  })
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
