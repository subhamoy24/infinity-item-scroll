import Image from "next/image"
const ListItem = ({item}) => {
  
  return(
  <div className='rounded-lg border border-slate-300'>
    <div className="relative">
      <Image
      alt='Mountains'
      src={item.image}
      width={0}
      height={0}
      sizes="100vw"
      className="rounded-t-lg w-full h-200px" style={{height: "200px"}}/>
      <div className="absolute top-2 right-2 w-10 h-10 flex justify-center items-center bg-[#323438] opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white stroke-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      </div>
      <div className="px-6 py-6">
        <h1 className="font-sans font-bold text-xl">{item.title}</h1>
        <h5 className="text-[#85878C] font-sans font-normal text-xs mt-1">{item.skills?.join(", ")}</h5>
        <div class="border-b border-[#E5E6E9] mt-3"></div>
        <div className="flex mt-3 items-center">
          <Image
          alt={item.company?.name}
          src={item.company?.logo}
          width={0}
          height={0}
          className="rounded-lg w-6 h-6"/>
          <h4 className="font-sans font-bold text-base ml-2">{item.company?.name}</h4>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <p className="text-base font-bold text-gray-900 dark:text-white">{item.company?.grade}</p>
          <span className="ml-2 text-base text-[#85878C]">({item.company?.grade_count})</span>
        </div>
        <p className="font-sans text-base mt-3 text-[#85878C]">{item.company.ratings.map((e) => e.type).join(", ")}</p>
        <div class="border-b border-[#E5E6E9] mt-3"></div>
        {item.reward_text ? <h5 className="font-sans text-sm font-bold mt-3" >취업 축하금: {item.reward_text}</h5> : ''}
      </div>
    </div>
  </div>
  )
}
export default ListItem;