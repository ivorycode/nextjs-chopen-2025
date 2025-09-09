
export default async function SingeUserScreen({params}: {params: Promise<{id: string}>}) {
  
  const userId = (await params).id;
  
  console.log('Rendering SingeUserScreen')
  return (
    <div>
      Display of SingeUserScreen: {userId}
    </div>
  );
}
