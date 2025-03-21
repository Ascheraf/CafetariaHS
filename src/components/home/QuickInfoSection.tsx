import { Clock, Truck, MapPin } from 'lucide-react';

const QuickInfoSection = () => {
  const today = new Date().getDay();
  // Convert 0-indexed day (0=Sunday) to our format (0=Monday, 6=Sunday)
  const dayIndex = today === 0 ? 6 : today - 1;
  const isWeekend = dayIndex === 6; // Sunday

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Today's Hours */}
          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-gray-700 mt-1" />
            <div>
              <p className="text-gray-700 font-medium">Vandaag</p>
              <div className="mt-1">
                <p className="text-gray-700">
                  <span className="font-medium">Afhaaltijden:</span> 16:00 - {isWeekend ? '00:00' : '01:00'}
                </p>
                <p className="text-gray-700 mt-0.5">
                  <span className="font-medium">Bezorgtijden:</span> 16:00 - {isWeekend ? '00:00' : '01:00'}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="flex items-start space-x-4">
            <Truck className="h-6 w-6 text-gray-700 mt-1" />
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Bezorgkosten:</span> v.a. € 2,00
              </p>
              <p className="text-gray-700 mt-0.5">
                <span className="font-medium">Bezorgen vanaf:</span> € 10,00
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-gray-700 mt-1" />
            <div>
              <p className="text-gray-700">stationsplein 3C</p>
              <p className="text-gray-700">2515 BT Den haag</p>
              <p className="text-gray-700 mt-0.5">0707504113</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickInfoSection;
