

interface DishProps {
  title: string;
  img: string;
}


  const DishSection: React.FC<DishProps> = ({ title,  img }) => (
  <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
    <img src={img} alt={title} className="w-64 h-64 object-cover rounded-lg shadow mb-6" />
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
  </section>
);

export default DishSection;

  