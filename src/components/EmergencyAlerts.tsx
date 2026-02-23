import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X, MapPin, Users, Clock, ChevronRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { emergencyAlerts, type EmergencyAlert } from "@/lib/campaign-data";

const EmergencyAlerts = () => {
  const [selectedAlert, setSelectedAlert] = useState<EmergencyAlert | null>(null);
  const [dismissedAlerts, setDismissedAlerts] = useState<Set<string>>(new Set());

  const activeAlerts = emergencyAlerts.filter(alert => alert.status === "active" && !dismissedAlerts.has(alert.id));
  const monitoringAlerts = emergencyAlerts.filter(alert => alert.status === "monitoring" && !dismissedAlerts.has(alert.id));

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-600 text-white";
      case "high": return "bg-orange-600 text-white";
      case "medium": return "bg-yellow-600 text-white";
      case "low": return "bg-blue-600 text-white";
      default: return "bg-gray-600 text-white";
    }
  };

  const getSeverityIcon = (type: string) => {
    switch (type) {
      case "drought": return "🌵";
      case "flood": return "🌊";
      case "conflict": return "⚔️";
      case "disease": return "🦠";
      default: return "⚠️";
    }
  };

  const dismissAlert = (alertId: string) => {
    setDismissedAlerts(prev => new Set(prev).add(alertId));
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  return (
    <div className="bg-background">
      {/* Alert Banner */}
      <AnimatePresence>
        {activeAlerts.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b border-red-200 bg-red-50"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-red-600 animate-pulse" />
                  <div>
                    <span className="font-semibold text-red-900">
                      {activeAlerts.length} Active Emergency{activeAlerts.length > 1 ? "s" : ""}
                    </span>
                    <span className="ml-2 text-sm text-red-700">
                      Click to view details
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    activeAlerts.forEach(alert => dismissAlert(alert.id));
                  }}
                  className="text-red-600 hover:text-red-800"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Active Alerts */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Active Emergencies</h2>
            
            <div className="space-y-4">
              {activeAlerts.length === 0 ? (
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <div className="text-2xl">✅</div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">No Active Emergencies</h3>
                  <p className="text-muted-foreground">
                    All systems are currently stable. We're monitoring conditions across Kenya.
                  </p>
                </div>
              ) : (
                activeAlerts.map((alert, index) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer rounded-xl border-2 border-red-200 bg-red-50 p-6 transition-all duration-300 hover:shadow-lg"
                    onClick={() => setSelectedAlert(alert)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <span className={`rounded px-2 py-1 text-xs font-bold ${getSeverityColor(alert.severity)}`}>
                            {alert.severity.toUpperCase()}
                          </span>
                          <span className="text-2xl">{getSeverityIcon(alert.type)}</span>
                          <h3 className="text-lg font-bold text-foreground">{alert.title}</h3>
                        </div>
                        
                        <p className="mb-4 text-sm text-muted-foreground">{alert.description}</p>
                        
                        <div className="grid gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-red-600" />
                            <span className="font-medium text-foreground">
                              {alert.affectedAreas.slice(0, 3).join(", ")}
                              {alert.affectedAreas.length > 3 && ` +${alert.affectedAreas.length - 3} more`}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-red-600" />
                            <span className="font-medium text-foreground">
                              {formatNumber(alert.peopleAffected)} people affected
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-red-600" />
                            <span className="font-medium text-foreground">
                              Updated {new Date(alert.lastUpdated).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h4 className="mb-2 font-semibold text-foreground">Response Actions:</h4>
                          <ul className="space-y-1">
                            {alert.responseActions.map((action, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Monitoring Alerts */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">Monitoring</h2>
            
            <div className="space-y-4">
              {monitoringAlerts.length === 0 ? (
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">All Clear</h3>
                  <p className="text-muted-foreground">
                    No areas currently under monitoring.
                  </p>
                </div>
              ) : (
                monitoringAlerts.map((alert, index) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl border border-yellow-200 bg-yellow-50 p-6"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className={`rounded px-2 py-1 text-xs font-bold ${getSeverityColor(alert.severity)}`}>
                        {alert.severity.toUpperCase()}
                      </span>
                      <span className="text-xl">{getSeverityIcon(alert.type)}</span>
                      <h3 className="text-lg font-bold text-foreground">{alert.title}</h3>
                    </div>
                    
                    <p className="mb-4 text-sm text-muted-foreground">{alert.description}</p>
                    
                    <div className="text-sm">
                      <div className="mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-foreground">{alert.affectedAreas.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-foreground">
                          {formatNumber(alert.peopleAffected)} people at risk
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-8 text-center text-white"
        >
          <h2 className="mb-4 text-2xl font-bold">Support Emergency Response</h2>
          <p className="mb-6 text-lg">
            Your donation helps us respond quickly and save lives during emergencies.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button size="lg" className="rounded-full bg-white text-red-600 font-bold hover:bg-gray-100">
              Emergency Fund
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/20">
              Volunteer
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Alert Detail Modal */}
      <AnimatePresence>
        {selectedAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedAlert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-2xl rounded-2xl bg-background p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">Emergency Details</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedAlert(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Type</h4>
                    <p className="text-muted-foreground capitalize">{selectedAlert.type}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Severity</h4>
                    <span className={`inline-block rounded px-3 py-1 text-sm font-bold ${getSeverityColor(selectedAlert.severity)}`}>
                      {selectedAlert.severity.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Full Description</h4>
                  <p className="text-muted-foreground">{selectedAlert.description}</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Affected Areas</h4>
                  <p className="text-muted-foreground">{selectedAlert.affectedAreas.join(", ")}</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-foreground">People Affected</h4>
                  <p className="text-muted-foreground">{formatNumber(selectedAlert.peopleAffected)} people</p>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Response Actions</h4>
                  <ul className="space-y-2">
                    {selectedAlert.responseActions.map((action, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full rounded-full bg-red-600 font-bold text-white hover:bg-red-700">
                    Support This Emergency Response
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmergencyAlerts;
