const Title = ({ text }) => {
  return (
    <div className="">
      <p
        className="text-[65px] text-gray-200"
        style={{
          borderLeft: '2px solid',
          borderImage:
            'linear-gradient(180deg, rgba(17,52,255,1) 0%, rgba(0,255,246,1) 100%)',
          borderImageSlice: '1',
          paddingLeft: '20px',
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Title;
