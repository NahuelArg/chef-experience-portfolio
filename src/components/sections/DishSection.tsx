

interface DishProps {
  img: string;
}


  const DishSection: React.FC<DishProps> = ({ img }) => (
  <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
    <img src={img} alt="Dish Image" className="w-64 h-64 object-cover rounded-lg shadow mb-6" />
  </section>
);

export default DishSection;

  