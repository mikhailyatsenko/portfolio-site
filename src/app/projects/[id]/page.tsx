type Props = {
  params: Promise<{ id: string }>;
};

export default async function Post({ params }: Props) {
  const id = (await params).id;
  return (
    <>
      <p>{id}</p>
    </>
  );
}
