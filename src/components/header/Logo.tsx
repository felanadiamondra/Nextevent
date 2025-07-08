// components/Logo.tsx
export default function Logo() {
    return (
      <div className="flex items-center space-x-2">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="h-6"
          alt="Logo"
        />
        <span className="font-bold text-lg">
          EVENT<span className="text-orange-500">PLAN</span>
        </span>
      </div>
    );
  }
  