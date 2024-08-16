import PatientForm from '@/components/Forms/PatientForm';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen min-h-screen">
      {/* TODO: ADD OTP VERIFICATION MODEL */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
        </div>
        <PatientForm />
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-end text-dark-600 xl:text-left">
            2024 Yas Health Care
          </p>
          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
        </div>
      </section>
      <Image
        src="/assets/doctors.png"
        alt="doctors"
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
