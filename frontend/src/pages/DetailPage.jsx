import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { useGetSingleNewsQuery } from "../features/apiSlice";
import Footer from "../components/layout/Footer";

const DetailPage = () => {
  const URL = process.env.REACT_APP_URL;
  const { id } = useParams();
  console.log({ useGetSingleNewsQuery });
  const { data: response, isLoading } = useGetSingleNewsQuery(id);
  const data = !isLoading ? response?.data : null;
  console.log({ data });
  return (
    <div>
      <div className="max-w-5xl mx-auto ">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {data ? (
              <div>
                <div className="bg-white w-full h-12 fixed top-0">
                  <Link
                    to="/"
                    className="text-2xl font-bold text-blue-500 flex items-center gap-2"
                  >
                    <BsArrowLeft />
                    <span>Home</span>
                  </Link>
                </div>
                <div className="my-16 flex flex-col justify-center items-center">
                  <img
                    className="object-cover w-full max-h-[600px]"
                    src={
                      `${URL}${data.attributes.picture.data[0].attributes.url}` ||
                      "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    alt=""
                  />

                  <div className="bg-white shadow-3xl px-4 max-w-3xl  py-16">
                    <h1
                      dangerouslySetInnerHTML={{
                        __html: data.attributes.title,
                      }}
                      className="text-4xl max-w-3xl mx-auto font-semibold text-center italic"
                    ></h1>
                    {/* <p className="font-roboto italic font-medium">
                      Writen by {article.author}
                    </p> */}
                    <p className="font-roboto italic">
                      Published on{" "}
                      {new Date(data.attributes.publishedAt).toLocaleString()}
                    </p>
                    <p className="my-4 text-lg first-letter:text-5xl first-letter:font-bold first-letter:border-blue-500 first-letter:ring-2 first-letter:px-1 first-letter:mx-1">
                      {data.attributes.body?.replace(/\.* \[.*\]/g, "")}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-col flex gap-4 items-center h-screen justify-center">
                <h1 className="text-3xl font-medium ">Article not found</h1>
                <Link
                  to="/"
                  className="flex items-center justify-center text-2xl text-blue-500 cursor-pointer"
                >
                  <BsArrowLeft />
                  <span>Return Home</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
