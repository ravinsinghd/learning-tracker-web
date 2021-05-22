import { CompletionStatus } from './type';

export const getCompletedPercentage = (data: CompletionStatus[]) => {
  return data.map((item) => {
    const label = item._id;
    const pendingItem = item.statusCount.find(
      (statusItem) => statusItem.status === 'pending'
    );
    const completedItem = item.statusCount.find(
      (statusItem) => statusItem.status === 'completed'
    );
    const pendingCount = pendingItem ? pendingItem.count : 0;
    const completedCount = completedItem ? completedItem.count : 0;
    const totalCount = pendingCount + completedCount;
    const percentage = (completedCount / totalCount) * 100;
    const formattedPercentage = Math.round(percentage);
    return {
      label,
      percentage: formattedPercentage,
    };
  });
};
