const PolicyListing = ({ list }) => {
  return (
    <ul className="list-disc ml-6">
      {list.map((item, index) => (
        <li key={item + index}>
          <p
            className="whitespace-pre-wrap text-[13px] md:text-[15px]"
            dangerouslySetInnerHTML={{ __html: item }}
          ></p>
        </li>
      ))}
    </ul>
  );
};

export default PolicyListing;
