const PlaceholderImage = ({ className = "", gradient = "from-primary/20 to-transparent" }) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} ${className}`}>
      <div className="w-full h-full flex items-center justify-center text-gray-600">
        {/* Optional: Add icon or text */}
      </div>
    </div>
  );
};

export default PlaceholderImage;
