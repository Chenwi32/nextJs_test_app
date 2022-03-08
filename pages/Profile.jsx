import Image from "next/image";

const Profile = () => {
  return (
    <div>
          <Image
              src="/images/DSC_0093.JPG"
              width={800}
              height={800}
              alt='Eugene'
          />
    </div>
  );
};

export default Profile;
