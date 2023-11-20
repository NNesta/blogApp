// import { useSelector, useDispatch } from "react-redux";
import { useGetAllNewsQuery } from "../features/apiSlice";
// import { setPublisher } from "../features/newsSlice";
import Wrapper from "../components/ui/Wrapper";
import Navbar from "../components/layout/Navbar";
import Loading from "../components/ui/Loading";
import NewsCard from "../components/ui/NewsCard";
// import HomeNavbar from "../components/ui/HomeNavbar";
import Footer from "../components/layout/Footer";

const Home = () => {
  const URL = process.env.REACT_APP_URL;
  const { data: response, isLoading, isFetching } = useGetAllNewsQuery();
  const data = !isLoading ? response?.data : [];
  console.log({ data, URL });
  return (
    <div className="bg-[#F7F7F7]">
      <Navbar />
      <Wrapper styles="relative max-w-[1440px]">
        <div className="flex flex-col lg:flex-row justify-end  mt-20 py-16">
          <div className=" mr-auto  gap-3">
            {isLoading || isFetching ? (
              <Loading />
            ) : (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 overflow-y-scroll scrollbar-hide">
                {data.map((item) => (
                  <NewsCard
                    key={item.id}
                    id={item.id}
                    image={`${URL}${item.attributes.picture.data[0].attributes.url}`}
                    title={item.attributes.title}
                    // publisher={item.source.name}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Home;
