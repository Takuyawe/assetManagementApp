import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  return { id };
}

export default function AssetEdit() {
  const { id } = useLoaderData<typeof loader>();
  console.log(id);
  return <div>{id}</div>;
}
