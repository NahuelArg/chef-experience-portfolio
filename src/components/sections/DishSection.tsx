

interface DishProps {
  title: string;
  desc: string;
  img: string;
  category:string;
}


  const DishSection: React.FC<DishProps> = ({ title, desc, category, img }) => (
  <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
    <img src={img} alt={title} className="w-64 h-64 object-cover rounded-lg shadow mb-6" />
    <h2 className="text-3xl font-bold mb-2">{title}</h2>
    <span className="text-sm text-black-700 mb-4">{category}</span>
    <p className="text-lg text-black-700 max-w-xl text-center">{desc}</p>
  </section>
);

export default DishSection;

  