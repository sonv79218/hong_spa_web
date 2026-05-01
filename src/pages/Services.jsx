import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServicePreview from "../components/home/ServicePreview";
export default function ServicesPage() {
	return (
		<section>
			<Navbar />
			<div className="pt-24 md:pt-32">
   				 <ServicePreview />
  			</div>
			<Footer />
		</section>
	);
}
