import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
<script async src="https://cse.google.com/cse.js?cx=b25bfdb1d1f084216">
</script>
<div class="gcse-search"></div>
<div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  );
}

export default HomePage;
