import Image from 'next/image';

interface ICartItemProps {
  creditText: string;
  paypalText: string;
  cryptoText: string;
  creditImageSrc: string;
  paypalImageSrc: string;
  cryptoImageSrc: string;
}

const PaymentMethods = ({
  creditText,
  paypalText,
  cryptoText,
  creditImageSrc,
  paypalImageSrc,
  cryptoImageSrc,
}: ICartItemProps) => {
  return (
    <div className="bg-white text-[#00031A] py-20">
      <h2 className="text-3xl font-sans text-center">Payment methods</h2>
      <div className="max-w-2xl mx-auto flex justify-between items-center pt-16">
        {creditText && creditImageSrc && (
          <>
            <div className="flex flex-col gap-8 h-32 justify-between">
              <Image
                src={creditImageSrc}
                width="50"
                height="50"
                alt={`${creditText} icon`}
              />
              <p>{creditText}</p>
            </div>
            <div className="h-16 border-r-2 border-gray-500"></div>
          </>
        )}
        {paypalText && paypalImageSrc && (
          <>
            <div className="flex flex-col gap-8 h-32 justify-between">
              <Image
                src={paypalImageSrc}
                width="50"
                height="50"
                alt={`${paypalText} icon`}
              />
              <p>{paypalText}</p>
            </div>
            <div className="h-16 border-r-2 border-gray-500"></div>
          </>
        )}
        {cryptoText && cryptoImageSrc && (
          <div className="flex flex-col gap-8 h-32 justify-between">
            <Image
              src={cryptoImageSrc}
              width="50"
              height="50"
              alt={`${cryptoText} icon`}
            />
            <p>{cryptoText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
