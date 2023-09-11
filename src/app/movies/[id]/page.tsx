const page = ({ params }: { params: { id: string } }) => {
  return <div>My id: {params.id}</div>;
};

export default page;
